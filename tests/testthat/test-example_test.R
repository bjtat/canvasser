library(canvasser)

test_that("multiplication works", {
  expect_equal(2 * 2, 4)
})

test_that("scrape_grade_breakdown", {
  expect_equal(scrape_grade_breakdown("csc225.html"), "categories_df_testcase.csv")
})

