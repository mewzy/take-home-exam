# MEWZY TAKE HOME EXAM

## Requirements

- ruby version 2.3.0 +
- rails version 4.0.0 +

## Installation

- git clone repository
- Create your own branch. The title of the branch should be `YOUR_FIRST_NAME-YOUR_LAST_NAME`.
- `$ bundle i`
- `$ rake db:migrate && rails s`

## Overview

In this assignment, you will be populating the `sqlite` database from the data provided in `.json` format, and completing a filter feature of a sample listings page.

You will be tested on your understanding of:

- Rails models and migrations
- Model relations and references
- Implementing 3rd Party library
- Reading and parsing JSON files
- Efficient SQL and ActiveRecord Querying
- Error Handling
- Rendering JSON

## Assignment

0 - Go to `localhost:3000`. You should see a simple dashboard with filters and an empty table.

1 - Create 3 classes - `Listing`, `Building` & `Neighbourhood`.

  - `Listing` has following attributes -

  ```
    :name => :string,
    :address => :string,
    :lat => :float,
    :lng => :float,
    :bedrooms => :integer,
    :bathrooms => :integer,
    :price => :integer,
    :parking => :boolean,
  ```

  - `Building` has following attributes -

  ```
    :name => :string,
    :address => :string,
    :lat => :float,
    :lng => :float,
    :selling_status => :string,
  ```

  - `Neighbourhood` has following attributes -

  ```
    :name => :string
  ```

2 - Neighbourhood has many buildings, and listings through buildings. Buildings has many listings. Add the necessary Model relations and generate references with foreign keys with rails migration.

3 - The `:lat` & `:lng` values for `Listing` and `Building` are not provided by the .json, but must be added to each listings and buildings. Install gem `Geocoder` https://github.com/alexreisner/geocoder and see how it can help you generate lats and lngs from the addresses of the buildings and listings efficiently.

4 - Read and parse `./database.json`. Parsing the json will give you a nested array. You should be able to create 3 neighbourhoods, 6 buildings, 12 listings from it. If you are using `rails console` to do this, include the snippet in `./json_parse.rb` to show your work.

5 - Go to localhost:3000 to see listings. You should see 12 listings.

6 - Explore `./app/assets/javascripts/components/listings/listings_page.js.jsx` and the `applyFilter` function, that sends the filter parameters to the `listings_controller` via a `POST` request to `/apply_filter`. See that when you click `Apply Filter`, the controller method called `filter` is hit.

7 - Write an efficient ActiveRecord query to return listings that pass the filters. Your code must be able to cover multiple filters at the same time, in any order. Return an empty array if the results are empty. Your code should pass the following test (and work as expected with other filters).

* filters['bedrooms'] = [2] (2+ beds) returns 9 listings
* filters['bedrooms'] = [1,3] && filters['parking'] = true (1-3 beds and with parking) returns 6 listings
* filters['bedrooms'] = [2] && filter['bathrooms'] = [2] (2+ beds and 2+ baths) returns 9 listings
* filters['price'] = [700000, 200000] && filters['bedrooms'] = [3] (price between 200,000 and 700,000 and with 3+ beds) returns 3 listings

8 - Include a simple error handling to deal with query or other errors. Include an appropriate status code. Pass parameter `error_message` as message explaining the error.

9 (Bonus) - You now want to replace `Building ID` on the listings table (listings_list.js.jsx) with `Building Name`. Make changes to `./app/assets/javascripts/components/listings/listings_list.js.jsx` and `listings_controller` to display the buildings names on mount as well as when applying filters.

10 - Push your completed work to this repository under a new branch. The title of the branch should be `YOUR_FIRST_NAME-YOUR_LAST_NAME`. If you'd like to explain your work in more detail, you can add it to the bottom of `README.md` in the space given below.

## Submission

To avoid candidates looking at each other's branches, please push the project into a new repository under your account.

## BEST OF LUCK!

***

## Additional Work Notes & Comments
