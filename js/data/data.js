let questions = new Array();

questions.push(
    new Question(
            `Why is AWS more economical than traditional data centers for applications with varying compute workloads` , 
            [   
                `Amazon EC2 costs are billed on a monthly basis`,
                `Users retain full administrative access to their Amazon EC2 instances`,
                `Amazon EC2 instances can be launched on demand when needed`,
                `Users can permanently run enough instances to handle peak workloads`
            ] ,
            2,
            `The ability to <a href="">launch instances on demand</a> when needed allows users to launch and terminate instances in
            response to a varying workload. This is a more economical practice than purchasing enough on-premises servers
            to handle the peak load`,
            1
        )
);

questions.push(
    new Question(
            `Which AWS service would simplify the migration of a database to AWS` , 
            [   
                `AWS Storage Gateway`,
                `AWS Database Migration Service (AWS DMS)`,
                `Amazon EC2`,
                `Amazon AppStream 2.0`
            ] ,
            1,
            `AWS DMS helps users migrate databases to AWS quickly and securely. The source database remains
            fully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS
            can migrate data to and from most widely used commercial and open-source databases`,
            3
        )
);
questions.push(
    new Question(
            `Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment` , 
            [   
                `AWS Config`,
                `AWS OpsWorks`,
                `AWS SDK`,
                `AWS Marketplace`
            ] ,
            3,
            ` AWS Marketplace is a digital catalog with thousands of software listings from independent software
            vendors that makes it easy to find, test, buy, and deploy software that runs on AWS`,
            2
        )
);
questions.push(
    new Question(
            `Which AWS networking service enables a company to create a virtual network within AWS` , 
            [   
                `AWS Config`,
                `Amazon Route 53`,
                `AWS Direct Connect`,
                `Amazon Virtual Private Cloud (Amazon VPC)`
            ] ,
            3,
            `Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch
            AWS resources in a virtual network that they define`,
            5
        )
);
questions.push(
    new Question(
            ` Which of the following is an AWS responsibility under the AWS shared responsibility model` , 
            [   
                `Configuring third-party applications`,
                `Maintaining physical hardware`,
                `Securing application access and data`,
                `Managing guest operating systems`
            ] ,
            1,
            `Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model`,
            4
        )
);
questions.push(
    new Question(
            `Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery` , 
            [   
                `AWS Regions`,
                `Edge locations`,
                `Availability Zones`,
                `Virtual Private Cloud (VPC)`
            ] ,
            1,
            `To deliver content to users with lower latency, Amazon CloudFront uses a global network of points of
            presence (edge locations and regional edge caches) worldwide`,
            3
        )
);
questions.push(
    new Question(
            `How would a system administrator add an additional layer of login security to a user's AWS Management Console` , 
            [   
                `Use Amazon Cloud Directory`,
                `Audit AWS Identity and Access Management (IAM) roles`,
                `Enable multi-factor authentication`,
                `Enable AWS CloudTrail`
            ] ,
            2,
            `Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a
            username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be
            prompted for their username and password (the first factor—what they know), as well as for an authentication
            code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide
            increased security for AWS account settings and resources`,
            1
        )
);
questions.push(
    new Question(
            `Which service can identify the user that made the API call when an Amazon EC2 instance is terminated` , 
            [   
                `AWS Trusted Advisor`,
                `AWS CloudTrai`,
                `AWS X-Ray`,
                `AWS Identity and Access Management (AWS IAM)`
            ] ,
            1,
            `AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their
            AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events
            include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs
            and APIs`,
            5
        )
);
questions.push(
    new Question(
            ` Which service would be used to send alerts based on Amazon CloudWatch alarms` , 
            [   
                `Amazon Simple Notification Service (Amazon SNS)`,
                `AWS CloudTrail`,
                `AWS Trusted Advisor`,
                `Amazon Route 53`
            ] ,
            0,
            `Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for
            every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the
            performance of their Amazon SNS topics, push notifications, and SMS deliveries`,
            5
        )
);
questions.push(
    new Question(
            ` Where can a user find information about prohibited actions on the AWS infrastructure` , 
            [   
                `AWS Trusted Advisor`,
                `AWS Identity and Access Management (IAM)`,
                `AWS Billing Console`,
                `AWS Acceptable Use Policy`
            ] ,
            3,
            `The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS
            infrastructure`,
            4
        )
);





