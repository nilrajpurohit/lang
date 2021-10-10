import calendar
print(calendar.weekheader(3)) # weekheader()

print(calendar.firstweekday()) #firstweekday() i.e (monday and its array value is 0).

print(calendar.monthcalendar(2019,3)) #monthcalendar() two diemensional array formated..

print(calendar.month(2019,3)) #month() new two parameter 1.year 2.month

print(calendar.calendar(2019)) #calendar() show the whole calender of particular year.

print(calendar.isleap(2000))
print()

print(calendar.leapdays(2000,2004)) #leapdays() its show the no of leap day betn the two years as parameter.
print()

print(calendar.weekday(3000,3,8)) #weekday() its return the week day as a array index.
print()

