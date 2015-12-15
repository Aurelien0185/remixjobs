# remixjobs
Unofficial restful API for RemixJobs

## Introduction

> Scrape 120 records of data from RemixJobs.
> Store them into mongodb. 
> Use web event and URL to do the CURD operations. 

<!-- more -->

## Notice

All copyright ownes by  `RemixJobs`. This is just an exercise, not allowed for business use.

## Routers

Get: Return all jobs: **/jobs**  
Get: Create a new job: **/jobs/creation**  
Post: Create a new job:  **/jobs/creation**  
Get: Show the details of a job: **/jobs/details/***  
Get: update a job: **jobs/updates/***  
Post: update a job: **jobs/updates**  
Get: display latest job: **/jobs/latest**

Get: Return all companies: **/companies/**
Get: Return all jobs of a given company: **/companies/***

Program-level Use:
Scrape data:  **/scrape**
P.s. If you want to scrape data by yourself, please dont forget to change the code:
`const url = "https://remixjobs.com/?page=31&in=all";`
In case many SAME date in the database
