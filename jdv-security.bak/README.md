# jdv-security
Example JBoss Data Virtualization project that implements role based security on a file source (Excel)

Referenced projects:

[JBoss Data Virtualization](https://developers.redhat.com/products/datavirt/overview/)



## Install
A JBoss Data Virtualization server is required to run this project

You can import this project into [JBoss Developer Studio](https://developers.redhat.com/products/devstudio/overview/)

Edit `setup.cli` to have the parent directory parameter equal to the install directory

Then edit `setup.sh` to reference the install path of JBoss Data Virtualization.

Run `setup.sh` to install the datasource on the server.

Add two users using the `add-user.sh` script in the JBoss Data Virtualization install bin directory.
  * Select **Application User**
  * Username(s) of **adminUser** and **powerUser**
  * Password of **Redhat1!**
  * Groups: odata,full for adminUser and odata,power for powerUser
  * Remoting question: no

Now you can deploy the `jdv.vdb` to JBoss Data Virtualization

A client that will work with this api is [jdv-security-client](https://github.com/mechevarria/jdv-security-client)

## Testing
You can import the tests located in `excel.postman_collection.json` into [Postman](https://www.getpostman.com/) for testing

By default you have to use basic auth against your deployed vdb.  You can add this in Postman to the headers.
