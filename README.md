#Global Disease Simulation
###Authored by Dylan Stackhouse, David Quisenberry, and Jay Freeman
##Description
A global disease simulator based on the adjacency of subnational territories.
##Setup
There are two ways to view the project.

1. Clone or download the repository form [here](https://github.com/DylanCStack/Global-Disease-Simulation) and open index.html in any web browser.
2. Visit the project's gh-pages site [here](https://dylancstack.github.io/Global-Disease-Simulation/).

##Specs
1. The program will display a map of the world with all subnational borders highlighted.
2. The program will display name and population information for a territory when the user hovers over it.
  * Input: hover
  * Output: Country: United States population: 270,000,000 State: Oregon State population 5,700,000
3. The program will zoom into the map when the user scrolls up, and out when scrolling down.
4. When zoomed in, the program will move along the map when the user clicks and drags the mouse.
5. The program will allow a user to input values into a form to customize a the qualities of a disease.
  * Form:
    * Disease Name:
    * Disease Virulence:
    * Disease Lethality:
6. After creating a disease, the program will allow the user to give the disease a starting point by clicking on the map.
7. After being given a starting point the disease will begin spreading to adjacent territories every 2 seconds.
8. Infected territories will change color to red the more infected they get.
