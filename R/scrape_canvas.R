#'
#' Converts html into strings, helper function for all the functions with html_filename as input
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' password protected websites.
#'
#' @param element HTML element to extract
#'
#' @return The HTML in string form
#'
#' @import rvest
#' @import stringr
#' @import xml2
#'
get_html_element <- function(html_filename, element) {

webpage <- read_html(html_filename)
asgns_html <- html_nodes(webpage, element)
asgns_text <- html_text(asgns_html)

return(asgns_text)
}


#'
#' Scrapes the assignment names
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @return A one column tibble that has all the assignment names from Canvas.
#' Note that if the grade book is not complete then there may be null/missing values
#' in the column. I recommend you fix those by hand to match whatever you're doing.
#'
#' @import rvest
#' @import stringr
#' @import xml2
#'
#' @export

scrape_asgns <- function(html_filename) {

  # Taking HTML and converting it to strings
  raw_asgns_text <- get_html_element(html_filename, '.title')

  # Cleaning up the strings of their HTML junk to be parsed correctly
  cleaned_asgns_text <- str_remove_all(raw_asgns_text, "\\n") %>%
    str_trim() %>%
    str_c(collapse = "\n") %>%
    str_replace_all("[:blank:]{5,}", "@@@@") %>%
    str_split("\n") %>%
    unlist()

  # Remove the '\r' chracter from CRLF if user is on Windows (Unix/MacOS systems use LF)
  # and grabs strings with the token
  asgn_names_with_token <- cleaned_asgns_text %>%
    str_replace_all("\r", "") %>%
    str_subset("@@@@")

  # Extract assignment name from left hand side of the token
  asgn_name <- str_extract(asgn_names_with_token, ".*(?=@@@@)")


  # Extract assignment type from right hand side of the token
  type <- str_extract(asgn_names_with_token, "(?<=@@@@).*")

  # Puts assignment names and types into a tibble
  assignments <- tibble(
    ASGN_NAME = asgn_name,
    ASGN_TYPE = type
  )

  return(assignments)
}


#'
#' Scrapes the grades
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @import rvest
#' @import stringr
#' @import xml2
#'
#' @return A one column tibble that has all the grades from Canvas. Note that if the
#' grade book is not complete then there may be null/missing values in the column. I
#' recommend you fix those by hand to match whatever you're doing.
#'
#' @export

scrape_asgn_grades <- function(html_filename) {

  # webpage <- read_html(html_filename)
  # asgn_scores_html <- html_nodes(webpage,'.grade')
  # asgn_scores_text <- html_text(asgn_scores_html)

  # Taking HTML and converting it to strings
  raw_asgn_scores_text <- get_html_element(html_filename, '.grade')

  # Cleans up strings, then extracts the numeric grade values for each assignment
  cleaned_asgn_grades <- str_remove_all(raw_asgn_scores_text, "\\n") %>%
    str_trim() %>%
    str_c(collapse = "\n") %>%
    str_split("\\n") %>%
    unlist() %>%
    str_replace("Instructor is working on grades", "Click to test a different score -") %>%
    str_subset("Click to test a different score") %>%
    str_extract("[:digit:]+") %>%
    as.numeric()

  # Puts assignment names and types into a tibble
  assignment_grades <- tibble(
    GRADE_EARNED = cleaned_asgn_grades
  )

  return(assignment_grades)
}


#'
#' Scrapes the total points possible
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @return A one column tibble that has all the total points from Canvas. Note that if the
#' grade book is not complete then there may be null/missing values in the column. I
#' recommend you fix those by hand to match whatever you're doing.
#'
#' @import rvest
#' @import stringr
#' @import xml2
#'
#' @export

scrape_total_points <- function(html_filename) {

  # webpage <- read_html(html_filename)
  # total_points_html <- html_nodes(webpage,'.points_possible')
  # total_points_text <- html_text(total_points_html)

  # Taking HTML and converting it to strings
  raw_total_points_text <- get_html_element(html_filename, '.points_possible')

  # Cleans up strings, then extracts the total possible grades for each assignment
  cleaned_total_points_list <- str_remove_all(raw_total_points_text, "\\n") %>%
    str_trim() %>%
    str_subset("[:digit:]")

  # Very messy converting to filter out annoying values with "/"
  total_points_df <- as.data.frame(cleaned_total_points_list[cleaned_total_points_list != ""]) %>%
    filter(!(str_detect(cleaned_total_points_list[cleaned_total_points_list != ""], "/")))

  # Casting all the values from factor to character to numeric
  colnames(total_points_df) <- "TOTAL_POINTS"
  total_points_values <- as.numeric(as.character(total_points_df$TOTAL_POINTS))

  # Putting values into a tibble
  total_points <- tibble(
    TOTAL_POINTS = total_points_values
  )

  return(total_points)
}

#'
#' Scrapes the HTML page for gradebook table
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @return A table with all the assignments and their grades.
#'
#' @import dplyr
#'
#' @export

scrape_html_for_grades <- function(html_filename) {

  # get each column of the table
  assignments <- scrape_asgns(html_filename)
  total_grades <- scrape_total_points(html_filename)
  your_grades <- scrape_asgn_grades(html_filename)

  # column bind them then convert to a tibble
  finished_asgn_table <- cbind(assignments, your_grades, total_grades) %>%
    as_tibble()

  return(finished_asgn_table)
}

