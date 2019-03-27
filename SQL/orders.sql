CREATE TABLE CUSTOMER_TBL (CUSTID INT IDENTITY(1,1) NOT NULL, F_NAME VARCHAR(255) NOT NULL, L_NAME VARCHAR(255) NOT NULL, 

BILL_ADDRESS VARCHAR(255) NOT NULL, BILL_CITY VARCHAR(255) NOT NULL, BILL_STATE VARCHAR(255) NOT NULL, BILL_ZIP VARCHAR(7) NOT NULL, 

PHONE VARCHAR(15) NOT NULL, COMPANY VARCHAR(255)NULL, EXT INT NULL, 

CONSTRAINT CUSTOMER_PK PRIMARY KEY (CUSTID)); 

  

CREATE TABLE CUST_CC_INFO (CCID INT IDENTITY (1,1) NOT NULL, CUSTID INT NOT NULL, CC_NUMBER VARCHAR(30) NOT NULL, CC_EXP VARCHAR(6) NOT NULL, 

CC_CODE VARCHAR(3) NOT NULL, 

CONSTRAINT CC_INFO_PK PRIMARY KEY (CCID), 

CONSTRAINT CUSTID_FK FOREIGN KEY (CUSTID) REFERENCES CUSTOMER_TBL(CUSTID)); 

  

CREATE TABLE PRODUCT(PRODUCTID INT IDENTITY(1,1) NOT NULL, PRODUCT_NAME VARCHAR(255) NOT NULL, PRODUCT_PRICE VARCHAR(255) NOT NULL, 

PRODUCT_AMT VARCHAR(255) NOT NULL, 

CONSTRAINT PRODUCT_PK PRIMARY KEY (PRODUCTID)); 

  

CREATE TABLE ORDERS(ORDERID INT IDENTITY (1,1) NOT NULL, CUSTID INT NOT NULL,SHIP_ADDRESS VARCHAR(255) NOT NULL, SHIP_CITY VARCHAR(255) NOT NULL, 

SHIP_STATE VARCHAR(255) NOT NULL, SHIP_ZIP VARCHAR(7) NOT NULL, ORDERDATE DATETIME NULL,  

CONSTRAINT ORDER_PK PRIMARY KEY (ORDERID), 

CONSTRAINT CUST_FK FOREIGN KEY (CUSTID) REFERENCES CUSTOMER_TBL(CUSTID)); 

  

CREATE TABLE ORDER_DETAILS (ORDERID INT NOT NULL, PRODUCTID INT NOT NULL, QUANTITY INT NOT NULL, 

CONSTRAINT OD_PK PRIMARY KEY (ORDERID,PRODUCTID), 

CONSTRAINT ORDERID2_FK FOREIGN KEY (ORDERID) REFERENCES ORDERS(ORDERID), 

CONSTRAINT PRODUCTID FOREIGN KEY (PRODUCTID) REFERENCES PRODUCT(PRODUCTID)); 

  

CREATE TABLE CC_DETAILS(CCID INT NOT NULL, ORDERID INT NOT NULL, AMOUNT_PURCHASED  VARCHAR(255) NOT NULL, 

CONSTRAINT CCD_PK PRIMARY KEY (ORDERID,CCID), 

CONSTRAINT ORDERID3_FK FOREIGN KEY (ORDERID) REFERENCES ORDERS(ORDERID), 

CONSTRAINT CCID_FK FOREIGN KEY (CCID) REFERENCES CUST_CC_INFO(CCID)); 