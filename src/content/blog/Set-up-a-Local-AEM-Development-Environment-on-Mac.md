---
title: Set up a Local AEM Development Environment on Mac
description: >-
  This guide covers the important topics of local installation, Apache Maven,
  and Java for setting up a local development environment for Adobe Experience
  Manager (AEM).
tags:
  - AEM
pubDate: 2023-05-02T04:00:00.000Z
---

These simple steps will help you get AEM up and running on your local machine.

Minimum system requirements -

* 5GB of free disk space for installation
* 2GB of RAM

Prerequisite for AEM Local Setup

* Java 8/11 (Open JDK or Oracle Java)
* Maven (3.5.3+)
* AEM Quickstart Jar with licence

Basic steps to setup AEM local instance -

1. c. Verify JDK installationYou may receive an alert message with the following warning:“jdk-11.0.2.jdk” cannot be opened because the developer cannot be verified.
   macOS cannot verify that this app is free from malware.
   then go to System Preferences > Security and Privacy settings and then allow the app to execute by clicking on “Allow Anyway” buttonBy now Java is in place as required.
   1. Download & Install Java JDK 11
      * Use [https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2\_osx-x64\_bin.tar.gz](https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_osx-x64_bin.tar.gz)  or download specific from [https://jdk.java.net/archive/](https://jdk.java.net/archive/) to download the .tar.gz
      * Open the terminal and go to download directory of jdk.
      * $ tar -xvf openjdk-11.0.2\_osx-x64\_bin.tar.gz
        $ sudo mv jdk-11.0.2.jdk /Library/Java/JavaVirtualMachines/

   2. JAVA\_HOME="/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home"
      PATH="${JAVA\_HOME}/bin:${PATH}"
      export PATH
      these file lies under user root directory, it might be hidden by default. Use cmd + Shift + . to toggle show hide in finder.Once you have made these changes, you can relaunch the Terminal to apply the updated profile. Alternatively, you can run the commands source .bash\_profile or source .zshrc to apply the updated environment variables.
      * Depending upon the terminal shell, if it’s bash open  .bash\_profile or if it's zsh then open .zshrc and add following entries at the bottom of file -
   * $ java -version
     openjdk version "11.0.2" 2019-01-15
     OpenJDK Runtime Environment 18.9 (build 11.0.2+9)
     OpenJDK 64-Bit Server VM 18.9 (build 11.0.2+9, mixed mode)

2. b. Set Maven Environment Variables - M2\_HOME and Pathc. Verify Maven installation$ mvn -version
   Apache Maven 3.9.2 (c9616018c7a021c1c39be70fb2843d6f5f9b8a1c)
   Maven home: /Users/Alex/apache-maven-3.9.2
   Java version: 11.0.2, vendor: Oracle Corporation, runtime: /Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home
   Default locale: en\_CA, platform encoding: UTF-8
   OS name: "mac os x", version: "10.16", arch: "x86\_64", family: "mac"

   1. Visit Maven website to download - [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)  and download the “Binary tar.gz archive” file.Extract after downloading tar.gz using the below command -$ tar -xvf apache-maven-3.9.2-bin.tar.gzAbove will extract binaries in the “apache-maven-3.9.2” directory, which you can move anywhere you want.
   * export M2\_HOME="/Users/Alex/apache-maven-3.9.2"
     PATH="${M2\_HOME}/bin:${PATH}"
     export PATH

   * Once you have made these changes, you can relaunch the Terminal to apply the updated profile. Alternatively, you can run the commands source .bash\_profile or source .zshrc to apply the updated environment variables.

   <!---->

   * Open the Terminal and run the mvn -version command, If installed properly you might see following output -
   1. d. Copy & Paste the aem quickstart jar and [licence.properties](http://licence.properties) in both of the folderse. Now rename the jar in using naming convention suggested by AEM as -aem\<optional-version-or-indentifier>-\<standard-run-mode>-p\<port-number>eg - aem6.5-author-p4502.jar, aem-author-p4502.jar, aem-publish-p4503.jarBy following this jar naming convention we set the run mode to author or publish and explicitly define the port number.After making these changes now our folder structure looks like -~/aem
          /author
              aem-author-p4502.jar
              license.properties
          /publish
              aem-publish-p4503.jar
              license.properties
      f. Now, to install the Author instance, double-click on the aem-author-p4502.jar file. This will start the author instance, which runs on port 4502 on the local computer. Similarly we can install and start the publish instance.g. We can also install and start the jar using below command in terminal  -$ java -jar aem-author-p4502.jar // for author instance
      $ java -jar aem-publish-p4503.jar // for publish instance
      or we can follow as adobe suggested on there AEM docs as -$ java -Xmx2048M -Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt\_socket,server=y,suspend=n,address=30303 -jar aem-author-p4502.jar -gui -r"author,localdev"
      As AEM instance started, we can visit [localhost:4502/](http://localhost:4502/a) for author.We can use the default username/password for local is admin/admin to login.
      1. Download AEM SDK from adobe website if you have a valid licence - [https://downloads.experiencecloud.adobe.com](https://downloads.experiencecloud.adobe.com)
      2. Unzip the JAR file from the downloaded ZIP file and get a copy of the AEM QuickStart Jar and a license.properties.
      3. \~/aem
         &#x9;/author
         &#x9;/publish
