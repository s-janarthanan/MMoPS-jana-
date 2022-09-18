# -*- coding: utf-8 -*-
"""
Created on Sun Sep 18 17:29:44 2022

@author: kavya
"""

import numpy as np
import matplotlib.pyplot as plt
from scipy.integrate import odeint
def plotter(r,a,b,m,x0,y0):
    t=np.linspace(0,20,201)
    def model(z,t):
        x=z[0]
        y=z[1]
        dxdt=r*x-a*x*y
        dydt=b*x*y-m*y
        dzdt=[dxdt,dydt]
        return dzdt
    z0=[x0,y0]
    sol1=odeint(model,z0,t)
    plt.plot(t, sol1[:, 0], 'b', label="Prey")
    plt.plot(t, sol1[:, 1], 'g', label="Predator")
    plt.legend()
    plt.xlabel('t')
    plt.title(("r = %.2f, a = %.2f, b = %.2f, m = %.2f, x0 = %.2f, y0 = %.2f")%(r,a,b,m,x0,y0))
    plt.show()
plotter(1,0.3,0.2,1,1,1)