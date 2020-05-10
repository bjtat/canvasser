#'
#' Scrapes the assignment names
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @return A one column dataframe that has all the assignment names from Canvas.
#' Note that if the grade book is not complete then there may be null/missing values
#' in the column. I recommend you fix those by hand to match whatever you're doing.
#'
#' @import rvest
#' @import stringr
#' @import xml2
#'
#' @export

scrape_asgns <- function(html_filename) {

  webpage <- read_html(html_filename)

  asgns_html <- html_nodes(webpage,'.title')
  asgns_text <- html_text(asgns_html)


  asgns_text <- str_remove_all(asgns_text, "\\n") %>%
    str_trim() %>%
    str_c(collapse = "\n") %>%
    str_replace_all("[:blank:]{5,}", "---") %>%
    str_split("\n") %>%
    unlist()

  asgns <- asgns_text %>% str_subset("---")

  TYPE <- str_extract(asgns, "(?<=---)[:alpha:]*")

  ASGN_NAME <- str_extract(asgns, ".*(?=---)")

  asgns <- cbind(as.data.frame(ASGN_NAME), as.data.frame(TYPE))

  return(asgns)

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
#' @return A one column dataframe that has all the grades from Canvas. Note that if the
#' grade book is not complete then there may be null/missing values in the column. I
#' recommend you fix those by hand to match whatever you're doing.
#'
#' @export

scrape_asgn_grades <- function(html_filename) {

  webpage <- read_html(html_filename)

  asgn_scores_html <- html_nodes(webpage,'.grade')

  asgn_scores_text <- html_text(asgn_scores_html)

  asgn_grades <- str_remove_all(asgn_scores_text, "\\n") %>%
    str_trim() %>%
    str_c(collapse = "\n") %>%
    str_split("\\n") %>%
    unlist() %>%
    str_replace("Instructor is working on grades", "Click to test a different score -") %>%
    str_subset("Click to test a different score") %>%
    str_extract("[:digit:]+") %>%
    as.numeric() %>%
    as.data.frame()

  colnames(asgn_grades) <- "GRADE_EARNED"

  return(asgn_grades)
}


#'
#' Scrapes the total points possible
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @return A one column dataframe that has all the total points from Canvas. Note that if the
#' grade book is not complete then there may be null/missing values in the column. I
#' recommend you fix those by hand to match whatever you're doing.
#'
#' @import rvest
#' @import stringr
#' @import xml2
#'
#' @export

scrape_total_points <- function(html_filename) {

  webpage <- read_html(html_filename)

  total_points_html <- html_nodes(webpage,'.points_possible')
  total_points_text <- html_text(total_points_html)

  total_points_list <- str_remove_all(total_points_text, "\\n") %>%
    str_trim() %>%
    unlist()

  total_points <- as.data.frame(total_points_list[total_points_list != ""]) %>%
    filter(!(str_detect(total_points_list[total_points_list != ""], "/")))

  colnames(total_points) <- "TOTAL_POINTS"
  total_points$TOTAL_POINTS <- as.numeric(as.character(total_points$TOTAL_POINTS))

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
#' @export

scrape_html_for_grades <- function(html_filename) {

  assignments <- scrape_asgns(html_filename)
  total_grades <- scrape_total_points(html_filename)
  your_grades <- scrape_asgn_grades(html_filename)

  finished_asgn_table <- cbind(assignments, your_grades, total_grades)

  return(finished_asgn_table)
}

