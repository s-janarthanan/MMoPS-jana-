import matplotlib.pyplot as plt
import numpy as np

r=m=1
a=0.3
b=0.2
x1=y1=1 
x=[]
y=[]
x.append(x1)
y.append(y1)
t_interval=0.2

slopeX = r*x1 - a*x1*y1
slopeY = -m*y1 + b*x1*y1

for i in range(int(20/t_interval)):
    x1 = x1 + slopeX*t_interval
    y1 = y1 + slopeY*t_interval
    x.append(x1)
    y.append(y1)
    if(x1<0):
        x1=0
    if(y1<0):
        y1=0
    slopeX = r*x1 - a*x1*y1
    slopeY = -m*y1 + b*x1*y1
    print(x1, " ", y1)
plt.plot(x,y)
plt.show()