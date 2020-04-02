#' Scrapes the grade breakdown table on the right header of the Canvas grade page
#'
#' @param html_filename Path to HTML file of Canvas page, recommended to place HTML file in the
#' same folder as where this is being used. Can also take Canvas HTML link but may not work due to
#' log-ins sometimes.
#'
#' @import rvest
#' @import stringr
#' @import xml2
#'
#' @return A 2 by X size table with categories and percentages as columns.
#'
#' @export

scrape_grade_breakdown <- function(html_filename) {

  webpage <- read_html(html_filename)

  asgn_scores_html <- html_nodes(webpage,'h2, td, th')

  asgn_scores_text <- html_text(asgn_scores_html)


  test <- str_remove_all(asgn_scores_text, "\\n") %>%
    str_trim() %>%
    str_c(collapse = "\n") %>%
    str_extract("(?<=Assignments are weighted by group:)(.|\\n)*") %>%
    str_remove_all("Group|Weight") %>%
    str_trim() %>%
    str_split("\\n")

  Categories <- test[[1]] %>% str_subset("[:alpha:]+") %>% as.data.frame()
  colnames(Categories) <- "CATEGORIES"

  Percentage <- test[[1]] %>% str_subset("^[:digit:]+") %>% as.data.frame()
  colnames(Percentage) <- "PERCENTAGES"

  breakdown_table <- cbind(Categories, Percentage)

  return(breakdown_table)
}


