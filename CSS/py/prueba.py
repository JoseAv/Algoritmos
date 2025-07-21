def ejercicio1(n):     # 1
    for i in range(n): # n
        print(i)       # n
                       # = n+n+1 = o(n)

def ejercicio2(n):      # 1
    for i in range(n):  # n
        print(i)        # n
    for j in range(n):  # n 
        print(j)        # n
                        # === o(n)
                         
def ejercicio3(n):         # 1
    for i in range(n):     # n
        for j in range(n): # n^2
            print(i, j)    # n^2                  
                           # === n^2

def ejercicio4(n):  # 1 
    i = 1           # 1
    while i < n:    # log(n)
        print(i)    # log(n)
        i *= 2      # log(n)
                    # === log(n)

def ejercicio5(n):             #1
    for i in range(0, n, 10):  # n
        print(i)               #n 
                               #===n

def ejercicio6(n):           #1
    for i in range(n):       #n
        for j in range(100): #1
            print(i, j)      #1
                             #=== n
 
def ejercicio8(n):          #1
    for i in range(n):      #n
        for j in range(i):  #n^2
            print(j)        #n^2
                            #===n^2

def ejercicio9(n):      #1
    for i in range(n):  #n
        if i % 2 == 0:  #n
            print(i)    #n
                        #===n

def ejercicio10(n):          #1
    for i in range(n):       #n
        for j in range(i, n): #n^2
            print(i, j)       #n^2
                             #===n^2

def ejercicio11(n):           #1
    for i in range(n):        #n  
        j = 1                 #n
        while j < n:          #n * log(n)
            print(j)          #n * log(n)
            j *= 2            #n * log(n)
                              #===n * log(n)

def ejercicio12(n):      #1
    for i in range(n):   #n
        print(i)         #n
    for j in range(1000):#n
        print(j)         #n
                         #===n

def ejercicio13(n):     #1
    for i in range(n):  #n
        print(i)        #n
    j = 1               #1
    while j < n:        #log(n)
        print(j)        #log(n)
        j *= 2          #log(n)
                        #===(n)

def ejercicio14(n):        #1
    for i in range(n):     #n
        print(i)           #n
    for j in range(n):     #n
        for k in range(n): #n^2
            print(j, k)    #n^2             
                           #===n^2


def ejercicio15(n):         #1
    for i in range(n):       #n
        for j in range(n):    #n^2
            for k in range(n):#n^3  
                print(i, j, k)#n^3
                                #===n^3

def ejercicio16(n):           #1
    for i in range(n):        #n
        for j in range(i, n): #n^2
            print(i, j)       #n^2
                              #===n^2
                               
def ejercicio17(n):       #1
    for i in range(n):    #n
        j = 1             #1
        while j < n:      #n log(n)
            print(i, j)   #n log(n)
            j *= 2        #n log(n)    
                         #===n log(n)                                         

def ejercicio18(n):         #1
    for i in range(10):     #(1)
        for j in range(n):  # 1 * n
            print(i, j)     # n                                               
                            # n

def ejercicio19(n):            #1
    for i in range(n):         #n
        for j in range(i + 1): #n^2
            print(i, j)        #n^2                  
                            #===n^2


def ejercicio20(n):             #1
    for i in range(n):          #n
        print(i)                #n
    for j in range(n):          #n
        for k in range(n):      #n^2
            print(j, k)         #n^2
    m = 1                       #1
    while m < n:                #log(n)
        print(m)                #log(n)
        m *= 2                  #log(n)
                                #===n^2