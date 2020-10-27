import altair as alt
from sqlalchemy import create_engine
import pandas as pd
import pymysql
import matplotlib.pyplot as plt


sqlEngine = create_engine("", pool_recycle=3600)
dbConn = sqlEngine.connect()
frame = pd.read_sql("", dbConn);
df = pd.read_sql("", dbConn);

alt.renderers.enable('altair_viewer')

chart = alt.Chart(df).mark_bar().encode(
        x="acc:N",        
        y="c:Q",
        color='scope'
        ).interactive()

chart.show()
