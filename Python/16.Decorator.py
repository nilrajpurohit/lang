# Decorator...
# def fun1(fun):
#     def wrapper():
#         print('hello')
#         fun()
#         print('How r u ?')
#     return wrapper
# def fun2():
#     print('My name is Nil')
#
# fun2 = fun1(fun2)
# fun2()


# OR

# def fun1(fun):
#     def wrapper():
#         print('Hey There')
#         fun()
#         print('Today we gonnna learn Python Programming')
#     return wrapper
#
# @fun1
# def fun2():
#     print('It Nil Rajpurohit')
#
# fun2()



# Decorator with Argument
# def Fun1(Fun):
#     def wrapper(*arg,**kargs):
#         print('Hello')
#         Fun(*arg,**kargs)
#         print('Welcome to Python Course')
#     return wrapper
# @Fun1
# def Fun2(name,name1):
#     print(f"{name} and {name1}")
# Fun2('Nikul','Nil')


# Fancy Decorators.



#Singleton Class Decorators.

import functools

def singleton(cls):
        @functools.wraps(cls)
        def wrapper(*args,**kargs):
            if not wrapper.instance:
                wrapper.instance = cls(*args,**kargs)
            return wrapper.instance
        wrapper.instance = None
        return wrapper

        @singleton
        class one:
            pass
        first = one()
        second = one()
        print(first is second)