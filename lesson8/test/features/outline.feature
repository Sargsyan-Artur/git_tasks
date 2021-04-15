@all
Feature: Access to other sites

@outline
Scenario Outline: youtube
  Given I open "<URL>"
  When I put "<text>" in search input
#   Then I should get <video>

  Examples:
      | URL | text | 
      | https://www.youtube.com/ | Bghdo  |
      | https://www.youtube.com/ | Lucifer  |