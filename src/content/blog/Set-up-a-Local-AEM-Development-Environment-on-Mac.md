---
title: Set up a Local AEM Development Environment on Mac
description: >-
  This guide covers the step by step guide to locally setup AEM on Mac along
  with Maven and Java.
tags:
  - AEM
pubDate: 2023-05-02T04:00:00.000Z
---

These simple steps will help you get AEM up and running on your local machine.

#### Minimum system requirements -
- 5GB of free disk space for installation
- 2GB of RAM

#### Prerequisite for AEM Local Setup
- Java 8/11 (Open JDK or Oracle Java)
- Maven (3.5.3+)
- AEM Quickstart Jar with licence

#### Basic steps to setup AEM local instance -

- Install JAVA and set system environment with JAVA_HOME 
	* Download & Install Java JDK 11
		- Use this [link](https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_osx-x64_bin.tar.gz) for jdk11 or download any specific from [jdk archive](https://jdk.java.net/archive/) to download the .tar.gz
		- Open the terminal and go to download directory of jdk.
		- Use the following command to archive the tar files. Then, extract them to the directory of your choice. I recommend keeping your JDK setup in the "/Library/Java/JavaVirtualMachines/" directory.
            
            ```shell
            $ tar -xvf openjdk-11.0.2_osx-x64_bin.tar.gz
            $ sudo mv jdk-11.0.2.jdk /Library/Java/JavaVirtualMachines/
            ```
            
	* Setting Environment Variables - JAVA_HOME and Path
		* Depending upon the terminal shell, if it’s `bash` open `.bash_profile` or if it's `zsh` then open `.zshrc` and add following entries at the bottom of file -
        
        ```bash
        JAVA_HOME="/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home"
        PATH="${JAVA_HOME}/bin:${PATH}"
        export PATH
        ```
        
        *these file lies under user root directory, it might be hidden by default. Use `cmd + Shift + .` to toggle show hide in finder.*
        
        Once you have made these changes, you can relaunch the Terminal to apply the updated profile. Alternatively, you can run the commands `source .bash_profile` or `source .zshrc` to apply the updated environment variables.
			
	* Verify JDK installation
    
		- Open the Terminal and run `java -version` command. If installed properly you might see following output -
        
		```bash
		$ java -version
		openjdk version "11.0.2" 2019-01-15
		OpenJDK Runtime Environment 18.9 (build 11.0.2+9)
		OpenJDK 64-Bit Server VM 18.9 (build 11.0.2+9, mixed mode)
		```
        
		If you may receive an alert message with the following warning:
		
		```text
		“jdk-11.0.2.jdk” cannot be opened because the developer cannot be verified.
		macOS cannot verify that this app is free from malware
		```
		
		then go to System Preferences > Security and Privacy settings and then allow the app to execute by clicking on “Allow Anyway” button
    
		By now Java is in place as required.
			
* Install Maven and set M2_HOME

	* Download & Install Maven
       
		- Visit Maven website to download - [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)  and download the “Binary tar.gz archive” file.
        
      - Extract after downloading `tar.gz` using the below command -
        ```shell
	$ tar -xvf apache-maven-3.9.2-bin.tar.gz
	```
      Above will extract binaries in the “apache-maven-3.9.2” directory, which you can move anywhere you want.
				
	* Set Maven Environment Variables - M2_HOME and Path
	
		- Depending upon the terminal shell, if it’s `bash` open  `.bash_profile` or if it's `zsh` then open `.zshrc` and add following entries at the bottom of file -
        
		```bash
		export M2_HOME="/Users/Alex/apache-maven-3.9.2"
		PATH="${M2_HOME}/bin:${PATH}"
		export PATH
		```
        
		- Once you have made these changes, you can relaunch the Terminal to apply the updated profile. Alternatively, you can run the commands `source .bash_profile` or `source .zshrc` to apply the updated environment variables.

	* Verify Maven installation
		
		- Open the Terminal and run the `mvn -version` command, If installed properly you might see following output -
    
			```bash
			$ mvn -version
			Apache Maven 3.9.2 (c9616018c7a021c1c39be70fb2843d6f5f9b8a1c)
			Maven home: /Users/Alex/apache-maven-3.9.2
			Java version: 11.0.2, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home
			Default locale: en_CA, platform encoding: UTF-8
			OS name: "mac os x", version: "10.16", arch: "x86_64", family: "mac"
			```
			
* Setup AEM jar

	 - Download AEM SDK from adobe website if you have a valid licence - [https://downloads.experiencecloud.adobe.com](https://downloads.experiencecloud.adobe.com/) 
	
  - Unzip the JAR file from the downloaded ZIP file and get a copy of the AEM QuickStart Jar and a license.properties.
  - Create a folder folder structure with any name like - 
           
	```bash
	~/aem
	   /author
           /publish
	```
  - Copy & Paste the aem quickstart jar and [licence.properties](http://licence.properties) in both of the folders.
  - Now rename the jar in using naming convention suggested by AEM as -
        
        ```
	aem<optional-version-or-indentifier>-<standard-run-mode>-p<port-number>
	```
       
	eg - `aem6.5-author-p4502.jar, aem-author-p4502.jar, aem-publish-p4503.jar`
        
     By following this jar naming convention we set the run mode to author or publish and explicitly define the port number.
        
     After making these changes now our folder structure looks like -
        
	```bash
	 ~/aem
	    /author
		aem-author-p4502.jar
		license.properties
	    /publish
		aem-publish-p4503.jar
		license.properties
	```
        
 - Now, to install the **Author** instance, double-click on the `aem-author-p4502.jar` file. This will start the author instance, which runs on port **4502** on the local computer. Similarly we can install and start the publish instance.
        
 - We can also install and start the jar using below command in terminal  -
        
	```shell
	$ java -jar aem-author-p4502.jar
	$ java -jar aem-publish-p4503.jar
	```
        
   or we can follow as adobe suggested on there AEM docs as - 
        
	```shell
	$ java -Xmx2048M -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket, server=y,suspend=n,address=30303 -jar aem-author-p4502.jar -gui -r"author,localdev"
	```
        
  As AEM instance started, we can visit [localhost:4502/](http://localhost:4502/a) for author.
        
  We can use the default username/password for local is admin/admin to login..
