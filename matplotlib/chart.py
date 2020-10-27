from sqlalchemy import create_engine
import pandas as pd
import pymysql
import matplotlib.pyplot as plt


sqlEngine = create_engine("", pool_recycle=3600)
dbConn = sqlEngine.connect()
# frame = pd.read_sql("", dbConn);
frame2 = pd.read_sql("", dbConn);
# pd.set_option('display.expand_frame_repr', False)

print(frame2)
plt.scatter(frame2[''],frame2[''])
# print(list(frame2['policy_cant']))
# data = {'Service': list(frame2['policy_cant'])}
# df = pd.DataFrame(data, columns=['Service'],index=frame2['service'])
# frame.iloc[1].plot(kind='bar')
# df.plot.pie(y='Service',figsize=(5,5),autopct='%1.1f%%', startangle=90)
plt.show()
dbConn.close()

                    

