#'
#' Calculate the overall grades per category
#'
#' @description  calculate the overall grades per category
#'
#' @param grades A grade book table from scrape_html_for_grades or a table formatted like its return value.
#'
#' @import dplyr
#'
#' @return A table with calculated overall grade per category from grade book table
#'
#' @export

calc_grade_per_category <- function(grades) {
  grade_table <- grades %>%
    tidyr::drop_na() %>%
    group_by(ASGN_TYPE) %>%
    summarise_at(c("GRADE_EARNED", "TOTAL_POINTS"), sum) %>%
    mutate(GRADE = (GRADE_EARNED / TOTAL_POINTS)*100) %>%
    select(ASGN_TYPE, GRADE)

  return(grade_table)
}

#'
#' Calculate weight/worth per category
#'
#' @description  Calculate weight/worth per category out of 100.
#'
#' @param grade_table A grade book table from calc_grade_per_category
#'
#' @param worth_vector A numeric vector where each value is 1-100 which the shown percentages of how much each category is worth (in alphabetical order).
#'
#' @return A one column dataframe that has all the grades from Canvas. Note that if the
#' grade book is not complete then there may be null/missing values in the column. I
#' recommend you fix those by hand to match whatever you're doing.
#'
#' @export

calc_worth_per_category <- function(grade_table, worth_vector) {


  WORTH <- as.data.frame(as.numeric(worth_vector) / sum(as.numeric(worth_vector)))
  colnames(WORTH) <- "WORTH"

  updated_table <- cbind(grade_table, WORTH)

  return(updated_table)

}

#'
#' Calculate grade needed on final
#'
#' @description  Scrapes the grades from Canvas and puts into a column.
#'
#' @param grade_worth_table A grade book table from scrape_html_for_grades or a table formatted like its return value.
#'
#' @param final_worth A numeric value that the final is worth.
#'
#' @param goal A numeric value that the goal grade is for the class.
#'
#' @return A numeric value that shows what you have to get on your final to get a certain grade in the class.
#'
#' @export

bootleg_rogerhub <- function(grade_worth_table, final_worth, goal) {


  current_grade <- sum((grade_worth_table$GRADE/100) * (grade_worth_table$WORTH) ) * 100

  grade_needed_on_final <- (((goal/100) - (current_grade/100) * (1 - (final_worth/100)) ) / (final_worth/100) ) * 100

  return(grade_needed_on_final)
}

