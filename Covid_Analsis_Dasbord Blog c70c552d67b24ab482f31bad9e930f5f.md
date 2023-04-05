# Covid_Analsis_Dasbord Blog

# The objective of the project.

Initially this project was made as school project but it could be changed in to a good dash board of covid analysis with a great features in the future.

# ****Audience of the project.****

This projects audience are people who would like to see a descriptive dash board on the glob and the ever country.

# ****Data Collection****

Datas of this project are collected from multiple API’s.

1. The covid analysis API I used it to get information about covid status in the world and in countries. 
2. HighChart’s API This API was used for the Graphs and Map Used in the website.
3. Country’s list API used to get list of countries in the map.
4.   Country’s flag API used to get Flags of countries.

# ****Structure**** of the project.

This project does multiple features in a single page.

1. The Map

The map was done by first taking a sample map of the world from high charts and then changed Simply changing the values of the maps (was initially area of each country) to the total  confirmed cases of covid in that country.  

The problem in doing so was that the countries in the map were 215 and the countries in the     covid analysis list were about 197. To manipulate this I used an nested for loop. 

The outer for loop iterates until the countries in the map and the second (inner loop) iterates     until the country lists. There for all data in the map are changed.  

1. The table

The table had a little complex to it.

The first thing was to create a slide able div i created two dives one inside the other and gave    inner div a fixed height and the overflow : hidden , overflow-y : scroll.  

Then I created an order list inside it.

After I used a for loop that goes up to the number of countries and stored them as an object     with key of country name and value of their total status.  

Then I sorted that object based on the values. After that I again created same for loop and created a list for every iteration in this list there is a progress bar and number of total confirmed people,  every list is appended to a variable called  countryList and this is appended to the un order list we created before.

1. The monthly graph 

From an array of countries in side every single value that contain a lot of things two of which         are date and total confirmed on that day.

 I took the dates of and chopped the first 6 strings to know the exact year and month of that data after that I created 36 variables for the 36 months  in the 3 years (Noted is a very bulky way and unadvisable way) and then I created a for loop to to go from the beginning date to the last date and use if conditions to assign to each variables. 

Then I got three identical monthly analysis of a year graph from high charts and changed the data with my variables.

4.The search  

This shows description of a counties statues after you searched a name of the country.

First I created an input to receive the name. To make non ambiguity the name of the country I created a datalist and appended the country names I fetched from an API to it using for loop.

Tues the name will appear automatically when search begins.

After the user inputs the country name and hits search button we take that country name with its id and compare it with the list of countries we have in the covid’s API after we get a match we take 4 values naming ****Total Confirmed , Total Deaths , Total Recovered , Total Active**** 

Then i got a chart that can display 4 categories and changed their values to the data i got.