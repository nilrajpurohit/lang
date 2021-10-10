import datetime
import pytz
today=datetime.date.today() #today()
print(today)

birthday=datetime.date(1999,8,19) #date()
print(birthday)
print(repr(birthday))

timeDelta=datetime.timedelta(days=10) #timedelta()
print(today+timeDelta)


weekday=datetime.date.today().weekday() #weekday()
print(weekday)

print(datetime.time(7,10,25,50)) #time()
print()

print(datetime.date(2019,12,2))#date()
print()

print(datetime.datetime(2019,12,2,7,10,25,50)) #datetime()
print()

hourdelta=datetime.timedelta(hours=10)
print(datetime.datetime.now())
print(datetime.datetime.now() + hourdelta) # increasing the hour by timedelta()

#pytz

datetime_tz = datetime.datetime.now(tz=pytz.UTC) #pytz.UTC
print(datetime_tz)

pacific=datetime_tz.astimezone(pytz.timezone('US/Pacific')) #pytz.timezone()
print(pacific)


print(pacific.strftime('%B %d %Y')) #strftime() f=formatimg..
date_thing = datetime.datetime.strptime('March 09,2019','%B %d,%Y')
print(repr(date_thing))
