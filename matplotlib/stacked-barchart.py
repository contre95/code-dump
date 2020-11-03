import matplotlib.pyplot as plt


labels = ['Before', 'After']
before_roles= [58, 23]
after_roles = [11, 3]
width = 0.35       # the width of the bars: can also be len(x) sequence
fig, ax = plt.subplots()
ax.barh(labels,before_roles, width, label='Compliant', color="#91B8F9")
ax.barh(labels,after_roles , width, label='Not Compliant', color="#EF7B85")
ax.legend((47,20),('123','123'))
ax.set_ylabel('Roles',fontsize=26)
ax.set_title('Roles that trust external entities',fontsize=27)
ax.legend()
# ax.invert_xaxis()
for label in (ax.get_xticklabels() + ax.get_yticklabels()):
    label.set_fontname('Arial')
    label.set_fontsize(30)
# plt.rcParams["font.size"] = "50"
plt.show()
