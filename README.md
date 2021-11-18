
<!-- README.md is generated from README.Rmd. Please edit that file -->

# canvasser

<!-- badges: start -->

<!-- badges: end -->

The goal of canvasser is to make it easier for students to scrape their
gradebook from canvas into a tibble to use as a dataset. Canvasser also
allows students to calculate the weight of each category and what they
need on the final for a desired grade.

## Installation

You can install the released version of canvasser from
[CRAN](https://CRAN.R-project.org) with:

``` r
install.packages("canvasser")
```

And the development version from [GitHub](https://github.com/) with:
<https://github.com/bjtat/canvasser>

``` r
# install.packages("devtools")
devtools::install_github("Brandontat5/canvassser")
```

## Before you get started - How to download HTML

  - Go to Canvas.
  - Select on a class.
  - Click on the grade section.
  - Your URL should be something like
    <https://canvas>.\[schoolName\].edu/courses/\[someRandomNumbers\]/grades.
  - Right click on the page and “save as”, make sure it is HTML and save
    it to where you can write a PATH to it.

For example, in these examples. I saved the HTML file called
“csc225.html” inside my dev folder which is in one directory deeper
than this file. So, my PATH is “./dev/csc225.html”. If you save it in
the same directory as your R file your PATH should be
“./\[fileNameOfHtml\].html”.

## Example - Getting assignment names

This is how to scrape the html file for assignment names. This will
return a tibble of assignment name and the category they go under in the
grade book. All the data types will be character for easy string
manpulation.

``` r
library(canvasser)
scrape_asgns("./dev/csc225.html")
#> # A tibble: 10 x 2
#>    ASGN_NAME                             ASGN_TYPE    
#>    <chr>                                 <chr>        
#>  1 Assignment 1: Binary and Hexadecimal  Assignments  
#>  2 Assignment 2: Machine Languages       Assignments  
#>  3 Assignment 3: Assembly Languages      Assignments  
#>  4 Assignment 4: Subroutines             Assignments  
#>  5 Assignment 5: Traps and Interrupts    Assignments  
#>  6 Assignment 6: Functions               Assignments  
#>  7 Assignment 7: Pointers and Structures Assignments  
#>  8 Midterm I                             Midterm Exams
#>  9 Midterm II                            Midterm Exams
#> 10 Final Exam                            Final Exam
```

## Example - Getting assignment grades

This is how to scrape the html file for assignment grades. All the
grades recieved for the assignments will be returned as doubles.
Assignments not graded will have NA as their grade. This will be a
tibble column of doubles.

``` r
scrape_asgn_grades("./dev/csc225.html")
#> # A tibble: 10 x 1
#>    GRADE_EARNED
#>           <dbl>
#>  1           20
#>  2           20
#>  3           20
#>  4           20
#>  5           20
#>  6           20
#>  7           NA
#>  8           42
#>  9           41
#> 10           NA
```

## Example - Getting assignment max points possible

This is how to scrape the html file for assignment point totals.
Similarly to scrape\_asgn\_grades(), it returns the same double tibble
column but with the total points possible for an assignment. This will
be a tibble column of doubles.

``` r
scrape_total_points("./dev/csc225.html")
#> # A tibble: 10 x 1
#>    TOTAL_POINTS
#>           <dbl>
#>  1           20
#>  2           20
#>  3           20
#>  4           20
#>  5           20
#>  6           20
#>  7           20
#>  8           50
#>  9           50
#> 10          100
```

## Example - Scraping the gradebook

This is how to scrape the html for the entire dataset. It will have the
data from the three pervious functions all in the same tibble. This is
closer to a conventional dataset to use.

``` r
scrape_html_for_grades("./dev/csc225.html")
#> # A tibble: 10 x 4
#>    ASGN_NAME                             ASGN_TYPE     GRADE_EARNED TOTAL_POINTS
#>    <chr>                                 <chr>                <dbl>        <dbl>
#>  1 Assignment 1: Binary and Hexadecimal  Assignments             20           20
#>  2 Assignment 2: Machine Languages       Assignments             20           20
#>  3 Assignment 3: Assembly Languages      Assignments             20           20
#>  4 Assignment 4: Subroutines             Assignments             20           20
#>  5 Assignment 5: Traps and Interrupts    Assignments             20           20
#>  6 Assignment 6: Functions               Assignments             20           20
#>  7 Assignment 7: Pointers and Structures Assignments             NA           20
#>  8 Midterm I                             Midterm Exams           42           50
#>  9 Midterm II                            Midterm Exams           41           50
#> 10 Final Exam                            Final Exam              NA          100
```

## Example - Calculating weight of each category in the gradebook

This is how to use the output of scrape\_html\_for\_grades() in another
function. This is one of the functions provided in order to use the
dataset tibble returned by scrape\_html\_for\_grades(). It drops any
assignment that have a NA for their grade and uses the points as the
weight per assignment.

``` r
table <- scrape_html_for_grades("./dev/csc225.html")
calc_grade_per_category(table)
#> # A tibble: 2 x 2
#>   ASGN_TYPE     GRADE
#>   <chr>         <dbl>
#> 1 Assignments     100
#> 2 Midterm Exams    83
```
