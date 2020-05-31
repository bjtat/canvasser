#' Scrapes the grade breakdown table on the right header of the Canvas grade page
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @importFrom rvest html_nodes html_text
#' @import stringr
#'
#' @return A 2 by X size tibble with categories and percentages as columns.
#'
#' @export

scrape_grade_breakdown <- function(html_filename) {

  # Taking HTML and converting it to strings
  raw_asgn_scores_text <- get_html_element(html_filename, 'h2, td, th')

  # Cleans up strings, then extracts the grade breakdown from the right side of the page
  cleaned_asgn_scores_text <- str_remove_all(raw_asgn_scores_text, "\\n") %>%
    str_trim() %>%
    str_c(collapse = "\n") %>%
    str_extract("(?<=Assignments are weighted by group:)(.|\\n)*") %>%
    str_remove_all("Group|Weight") %>%
    str_trim() %>%
    str_split("\\n")

  # Creates category and percentage vectors to combine
  Categories <- cleaned_asgn_scores_text[[1]] %>% str_subset("[:alpha:]+")

  Percentage <- cleaned_asgn_scores_text[[1]] %>% str_subset("^[:digit:]+")

  breakdown_table <- tibble(
    CATEGORIES = Categories,
    PERCENTAGES = Percentage
  )

  return(breakdown_table)
}


