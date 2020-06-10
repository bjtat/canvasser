library(canvasser)

test_that("multiplication works", {
  expect_equal(2 * 2, 4)
})

### Test case 1, scrape_grade_breakdown
test_that("scrape_grade_breakdown returns correct tibble", {

  expected <- readr::read_csv("categories_df_testcase.csv")

  expect_equal(scrape_grade_breakdown("csc225.html"), expected)
})

### Test case 2, scrape_asgns
test_that("scrape_asgns returns correct tibble", {

  expected <- readr::read_csv("asgn_df_testcase.csv")

  expect_equal(scrape_asgns("csc225.html"), expected)
})

### Test case 3, scrape_asgn_grades
test_that("scrape_asgn_grades returns correct tibble", {

  expected <- readr::read_csv("asgn_grades_df_testcase.csv")

  expect_equal(scrape_asgn_grades("csc225.html"), expected)
})

### Test case 4, scrape_total_points
test_that("scrape_total_points returns correct tibble", {

  expected <- readr::read_csv("total_points_df_testcase.csv")

  expect_equal(scrape_total_points("csc225.html"), expected)
})

### Test case 5, scrape_html_for_grades
test_that("scrape_html_for_grades returns correct tibble", {

  expected <- readr::read_csv("scrape_html_for_grades_df_testcase.csv")

  expect_equal(scrape_html_for_grades("csc225.html"), expected)
})

### Test case 6, calc_grade_per_category
test_that("calc_grade_per_category returns correct tibble", {

  expected <- readr::read_csv("calc_grade_per_category_df_testcase.csv")

  expect_equal(calc_grade_per_category(scrape_html_for_grades("csc225.html")), expected)
})

### Test case 7, calc_worth_per_category
test_that("calc_worth_per_category returns correct tibble", {
  actual <- calc_worth_per_category(calc_grade_per_category(scrape_html_for_grades("csc225.html")), c(40,26))
  expected <- readr::read_csv("calc_worth_per_category_df_testcase.csv")
  expect_equal(actual, expected)
})

## Test case 8, bootleg_rogerhub
test_that("scrape_asgns returns correct tibble", {
  table <- calc_worth_per_category(calc_grade_per_category(scrape_html_for_grades("csc225.html")), c(40,26))

  expect_equal(bootleg_rogerhub(table ,36, 93), 92.5, tolerance= 0.05)
})
