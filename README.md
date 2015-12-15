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
ex. `http://localhost:3000/jobs`
Create a new job: POST --> **/jobs?job={json_string}**  
ex. `http://localhost:3000/jobs?job={"title":1, "company":2,"contract":3}`
Return information of a job: GET-> **/jobs/:id***  
ex. `http://localhost:3000/jobs/567004142c33a91102c200b0`
Update a job: PUT-> **jobs/:id***  
ex. `http://localhost:3000/jobs/567004142c33a91102c200b0?contract=CDD`
Return all jobs of the current day: GET-> **jobs/updates**  
ex. `http://localhost:3000/jobs/567004142c33a91102c200b0`

Get: Return all companies: **/companies/**  
Get: Return all jobs of a given company: **/companies/***

Program-level Use:  
Scrape data:  **/scrape**  
P.s. If you want to scrape data by yourself, please dont forget to change the code:
`const url = "https://remixjobs.com/?page=31&in=all";`
In case many SAME date in the database
