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

Return all jobs: GET --> **/jobs**  
Create a new job: POST --> **/jobs/create?job={}**  
Return information of a job: GET-> **/jobs/details/:id***  
Update a job: PUT-> **jobs/details/:id?***  
Return all jobs of the current day: GET-> **jobs/updates**  

Get: Return all companies: **/companies/**  
Get: Return all jobs of a given company: **/companies/***

Program-level Use:  
Scrape data:  **/scrape**  
P.s. If you want to scrape data by yourself, please dont forget to change the code:
`const url = "https://remixjobs.com/?page=31&in=all";`
In case many SAME date in the database
