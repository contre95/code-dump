import setuptools
import shutil


install_requires = [
   'requests>=2.9.1',
   'Flask-SQLAlchemy==2.2'
]


setuptools.setup(
   name='polp',
   install_requires=install_requires,
   entry_points={
       'console_scripts': [
           'polp=polp:main',
       ],
   }
)
