# @all
# Feature: Access to other sites

#   @bash
#   Scenario: I should be able too access bash.im
#     Given I open "http://bash.im/" url
#     Then Page title should be "Цитатник Рунета"

#   @git
#   Scenario: I should be able to access github
#     Given I open "https://github.com/" url
#     Then Page title should be "GitHub: Where the world builds software · GitHub"

#   @other
#   Scenario Outline: I should be able to access <>
#     Given I open "<URL>" url
#     Then Page title should be "<Title>"

#     Examples:
#       | URL               | Title                     |
#       | https://habr.com/ | All posts in a row / Habr |
#       | https://ya.ru/    | Яндекс                    |