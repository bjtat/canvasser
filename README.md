
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
<https://github.com/Brandontat5/canvasser>

``` r
# install.packages("devtools")
devtools::install_github("Brandontat5/canvassser")
```

## Example - Getting assignment names

This is how to scrape the html file for assignment names:

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

This is how to scrape the html file for assignment grades:

``` r
library(canvasser)
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

This is how to scrape the html file for assignment point totals:

``` r
library(canvasser)
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

This is how to scrape the html for the entire dataset:

``` r
library(canvasser)
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
function:

``` r
library(canvasser)
table <- scrape_html_for_grades("./dev/csc225.html")
calc_grade_per_category(table)
#> # A tibble: 2 x 2
#>   ASGN_TYPE     GRADE
#>   <chr>         <dbl>
#> 1 Assignments     100
#> 2 Midterm Exams    83
```
