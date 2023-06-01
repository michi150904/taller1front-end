price=10000;
op=1;
while(op):
    edad=int(input("Digite la edad de la persona"));
    if edad>=5 and edad<=14:
        desc=price*0.35;
        total=price-desc;
        print (f"El total de la boleta es: {total}")



