---
id: version-1.8.0-contents
title: Contents
original_id: contents
---


The first few layers of this section are organizational prior to actually adding content.  There is flexibility in naming these levels. Starting from the [unit level](#course-units), onward the instructions are the same for all organizational frameworks. 


## School

This level is identified in the School/Program framework during setup but the same management applies when the structure is course based or it is for high school.  
To enter this School Management section select School from the left sidenav and the dashboard shown below will appear.   

 
![Blank School Page](assets/school1.png)  


The above page is for the `dashboard` and it is called school management, here you can `add` different schools, `delete` schools and  `edit` schools.

### Add School/Program/Content Area

The New button next to delete allows the Administrator to add a new school, when clicked it brings a simple form to add `Name of School`, `School Code` as shown in the picture below.


![Add New School](assets/school2.png)  

School Code can be anything, to identify from different Schools  
When You are done Entering the above 2 fields you click on Save button to add the new school  

After Saving, You will get a quick notification that the school was successfully added, and it will be listed as shown in the picture below.  

![Listing Schools](assets/school3.png)  

> `School` is the name of the School  
> `CreatedAt` is the date that school was created  
> `Edit School` When the pencil is clicked for the school it pops out a form to update details for that school as shown below, this is useful in case the school name has been changed or any mistakes were made when creating that school.    
> `Programs` This is the link that takes you to the next page to add programs that are under that school.   
> `Delete` The delete button allows the Administrator to delete the checked (Selected) School.  Note: An administrator can only delete the content they created to avoid possible conflicts with other content-managers' content. Deleting cannot be undone.  

### Editing School  

![Editing School](assets/school4.png)  

Just like when Adding School, when you are done editing school details, you click the save button to update the edits, and you will have new changes saved.   



## Programs 

Adding a Program under a School is basically the same procedure as adding a School, the administrator however should keep in mind that the Program falls under the selected School. The screenshot below shows Programs and the Managing (`Adding`, `Editing` and `Removing`) is the same as for School
There is slight difference when adding a Program in that there is `Program Duration` which is the duration of the Program, **eg**: Nursing could take 4 years.  
**Note** on this Programs page, you have a button to take you back to Schools anytime you wish.
 

![Programs Page](assets/school5.png)  

## Courses 

Courses are arranged in the same manner as Programs with the addition of an identifier for which year of the Program the course is offered, i.e.1, 2 etc ... Administrators and Content-Managers can add and modify courses and the procedures are the same as described for Programs.   

![Courses Page](assets/school6.png)  

## Units  

The course Units belong to the selected Course, on this page the name of the Course is shown on top of the page and since there may be more than one unit, we provide a search box to search through that course's unit. There are 2 new buttons on this page, the `New` and `Add reference`.  
 
 ![Course Unit](assets/school7.png)

### Adding Units

`new` Button unlike on [Courses](#courses) or [Programs](#programs), it opens a new page.

From the new page, you can add a `Unit`, the `description` of that course and topics that belong to that course Unit.  The two buttons the `red(-)` and the `green(+)`, will help you add or remove topic fields, in case you want to add more than one topic at this level. When you are done, you click save to add the course Unit with its Topics.   
You can make use of the back button at the top to take you to the list of course Units.
When a new Unit is added, if User Authentication is enabled then users will be notified that there is new content that has been added at log in.  
In case you are looking to edit a specific course Unit, you can use the search function and press enter to see the matching results.
 

![Add unit and topics](assets/school8.png)   

### Searching Course Units  

In case you are looking to edit a specific course unit, you can type the name of the course unit in the provided search box and press enter to see the matching results.  

## Topics  

The Topics page exists immediately after course Units and resources may be added under a specific Topic.
(screenshot needed here)

Topics are  managed (`Added`, `Edited` and `Deleted`) the same way as other content categories  in SparkEd. The system is set at 10 topics and the topics will be paginated. This can be changed in the top right corner of the page.
 

## Topic or Unit Specific Resources  

The Resources Page is one of the most important pages, Management is the same as other pages, the only difference is that it allows you to upload resources for the previously added contents in this case, we are addding resources under the previous topic.  

> Resources to be added can be in different file formats, currently the supported files are `images`, `videos(mp4 and webm)`, `books(pdf)` and `audio(mp3)`.   
The current size limit is 5GB but we would recommend to break very large files to  `250mb` segments for ease of loading but this can be exceeded. 

The Upload will show you how many files you have selected to upload and how big they are.  

Just like on the [Add Reference](#add-reference) and [Uploading logo](setup.md#upload-institution-logo) the upload shows progress in percentage and a progress bar to let you know how far files are when uploading. 


## Adding General References/Resources
  
At the level of Units, the button Add Reference allows content-managers to add resources that are under that course but don't necessarily fall under any specific course Unit or Topic. These could be books or additional general resources. When Add Reference at the Unit is clicked, it will pop out a form to upload resources with the title of the current course. You can upload multiple files with different file formats, the supported files are `images`, `pdf`, `audio`, `mp4`, `webm` as above.  

The files may take a while to upload, this will depend on your server setup and the upload progress will be shown.  Once the upload is done you will be notified quickly and a link of where the uploaded files are listed will be provided, you may continue with managing course Units while the upload is taking place.

**Note**: ***The Uploaded files are not listed on course units page, they can be found in [Reference Library](referencelibrary.md)***

![Add Reference](assets/school9.png) 

















 






<!-- Screenshot for the School Management Component -->