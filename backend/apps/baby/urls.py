from django.conf.urls import patterns, url
from views import *

urlpatterns = patterns('',
    url('^kids/$', KidList.as_view(), name='family')

    )



