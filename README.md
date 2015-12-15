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

GET: Return all jobs --> **/jobs**  
ex. `http://localhost:3000/jobs`  
POST: Create a new job --> **/jobs?job={json_string}**  
ex. `http://localhost:3000/jobs?job={"title":1, "company":2,"contract":3}`  
GET: Return information of a job --> **/jobs/details/:id**  
ex. `http://localhost:3000/jobs/details/567004142c33a91102c200b0`  
PUT: Update a job --> **jobs/:id**  
ex. `http://localhost:3000/jobs/567004142c33a91102c200b0?contract=CDD`  
GET: Return all jobs of the current day --> **jobs/updates**  
ex. `http://localhost:3000/jobs/latest`

GET: Return all companies --> **/companies/**  
ex. `http://localhost:3000/companies`  
GET: Return all jobs of a given company --> **/companies/:company**  
ex. `http://localhost:3000/companies/Parrot`

Program-level Use:  
Scrape data:  **/scrape**  
P.s. If you want to scrape data by yourself, please dont forget to change the code:
`const url = "https://remixjobs.com/?page=31&in=all";`
In case many SAME date in the database
