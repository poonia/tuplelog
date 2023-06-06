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

Minimum system requirements -

* 5GB of free disk space for installation
* 2GB of RAM

Prerequisite for AEM Local Setup

* Java 8/11 (Open JDK or Oracle Java)
* Maven (3.5.3+)
* AEM Quickstart Jar with licence

Basic steps to setup AEM local instance -

1. Install JAVA and Maven and set system environment with JAVA\_HOME and M2\_HOME.
   * Download & Install Java JDK 11
     * Use [https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2\_osx-x64\_bin.tar.gz](https://download.java.net/java/GA/jdk11/9/GPL/openjdk-11.0.2_osx-x64_bin.tar.gz)  or download specific from [https://jdk.java.net/archive/](https://jdk.java.net/archive/) to download the .tar.gz
     * Open the terminal and go to download directory of jdk.
     * $ tar -xvf openjdk-11.0.2\_osx-x64\_bin.tar.gz
       $ sudo mv jdk-11.0.2.jdk /Library/Java/JavaVirtualMachines/
   * Setting Environment Variables - JAVA\_HOME and Path
     * Depending upon the terminal shell, if it’s \`bash\` open  \`.bash\_profile\` or if it's \`zsh\` then open \`.zshrc\` and add following entries at the bottom of file - 
       * JAVA\_HOME="/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home"
         PATH="${JAVA\_HOME}/bin:${PATH}"
         export PATH
         these file lies under user root directory, it might be hidden by default. Use \`cmd + Shift + .\` to toggle show hide in finder.
       * Once you have made these changes, you can relaunch the Terminal to apply the updated profile. Alternatively, you can run the commands source .bash\_profile or  source .zshrc  to apply the updated environment variables.
     * Verify JDK installation
       * Open the Terminal and run java -version command. If installed properly you might see following output - 
       * $ java -version
         openjdk version "11.0.2" 2019-01-15
         OpenJDK Runtime Environment 18.9 (build 11.0.2+9)
         OpenJDK 64-Bit Server VM 18.9 (build 11.0.2+9, mixed mode)
       * You may receive an alert message with the following warning:
       * “jdk-11.0.2.jdk” cannot be opened because the developer cannot be verified.
         macOS cannot verify that this app is free from malware.
       * then go to System Preferences > Security and Privacy settings and then allow the app to execute by clicking on “Allow Anyway” button
       * By now Java is in place as required.
