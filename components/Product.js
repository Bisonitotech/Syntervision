import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

 const productItems = [
  {
    id: 1,
    altText: 'Oasis Automation',

    img: '/static/images/eventmanager-modal.png',
    subtitle: <h4>Simplify Automation with The Oasis Virtual Operator (OVO)</h4>,
    caption: <div className="ptype">If you’re looking for a world class RPA, you’ve found it with Syntervision. Our enterprise product takes advantage of robotic process automation and artificial intelligence by offering a more cost-effective solution that’ll increase savings without sacrificing quality.
    <p>The Oasis Virtual Operator delivers exceptional automation services for any repeatable process through cognitive computing. The graphical user interface offers a number of common automations right out of the box, but can also be customized! The OVO utilizes multi-path processes to quickly learn and implement the specific scripted language inputted into the system with limitless flexibility and control. And OVO can be purchased as a standalone product or as part of the Oasis Platform.</p>
    <h5>Enter the World of Automation to Experience Simplicity</h5>
    <p>Oasis Automation is a natural step in the lifecycle of a maturing Enterprise Service Management or IT Operations strategy in any business.</p>
              <ul>
                <li>Reduce Errors</li>
                <li>Automated Mundane Tasks</li>
                <li>Responds to Common Deviations Rapidly</li>
                <li>Reduce Ticket Count by 80%</li>
                <li>Save time and money in incident resolution staff hours and lost business</li>
                <li>Ensure ultimate customer satisfaction</li>
              </ul>
              </div>
  },
  {
    id: 2,
    altText: 'Discovery Engine',

    img: '/static/images/DeviceDiscoveryNetworkView.png',
    subtitle: <h4></h4>,
    caption: <p>Today, change to your virtual and physical environments is a function of business, happening fast and in high volumes. Oasis Discovery is designed to keep up with today’s hybrid IT, regardless of the location of the assets and in spite of increasing rates in change volume and change types. Auto-discovery is crucial to your business because it is impossible to stay up to date with this tremendous volume of devices, applications and cloud resources without the help of a powerful tool.<br/><br/>Two of the most important components of an IT Operations Management Platform are discovering all of your logical, physical and virtual assets and automatically maintaining an accurate CMDB. Additionally, the CMDB demands knowing how each element is related to the business; there must always be context and no element or Configuration Item (CI) can be an island unto itself.
    <br/><br/>The Oasis discovery engine is completely agentless, lightning fast, lightweight, and requires minimal credentials and IP addresses to do its work. The output of the Oasis Discovery engine drives the Oasis Analytics, Reporting and Automation Components. All assets and any changes are updated in near real-time.
    <br/><br/>Discovery methods that are leveraged in Oasis include: ICMP, Netbios, SMB, SNMP, JMX, WinRM, SSH and credentials to inspect virtual environments, cloud-based resources in Azure, AWS, Google and containers with management layers such as Kubernetes. Application relationships can be discovered passively through a combination of SNMP, SSH, WinRM and Netflow: depending on your own policies for polling.</p>
  },
  {
    id: 3,
    altText: 'Application and Infrastructure Monitoring',

    img: '/static/images/appmonitoringmodal.jpg',
    subtitle: <div className="ptype">Oasis, based on how it is configured, can monitor virtually anything and everything. Since the Oasis platform was designed to do end-to-end service management without the complexity of multiple tools, it is not dependent on other products to complete the solution’s monitoring capabilities. It is important to note, however, that there are numerous products that work well in tandem with Oasis; that flexibility allows us to integrate with your existing ITOM tools, home grown monitoring, element managers and performance management solutions.<br/><br/>
    <ul>
      <li>Measure end-user-experience and application performance via synthetic checks</li>
      <li>Network analysis of traffic to monitor production traffic</li>
      <li>Application Performance Monitoring</li>
      <li>Core Monitoring (Availability, SLA, Event, Asset, Incident, Service Management, and more)</li>
    </ul>
  </div>
  },
  {
    id: 4,
    altText: 'Oasis Advanced Analytics',

    img: '/static/images/analyticsmodal.jpg',
    subtitle: <h4>Oasis delivers business impacting information straight out of your raw data.</h4>,
    caption: <div className="ptype">Countless feeds from your devices, applications, logs and events are consumed by the Oasis ingestion engine, then normalized to generate context. In turn, that information can be converted into actionable intelligence by the Oasis analytics engine.<br/><br/>
              <ul>
                <li>Find anomalies based on classifying disparate data sources</li>
                <li>Easily forecast capacity challenges</li>
                <li>Watch for deviations in time-series data so you can focus on the events that most impact your business</li>
              </ul>
            </div>
  },
  {
    id: 5,
    altText: 'Oasis Event Manager',

    img: '/static/images/automationmodal.jpg',
    subtitle: <h4>Reduce Noise with The Oasis Event Manager</h4>,
    caption: <p>The Oasis Event Manager (OEM) delivers a mature and modernized approach to Operations Management by
              reducing the noise in your system. Go from thousands of daily events down to a manageable volume for your
              NOC staff - a sure way to increase productivity. With OEM, they're able to pinpoint the root cause of business
              impacting events such as outages and performance degradations, quicker. <br/><br/>

              Events are automatically correlated to the services they impact so your operations team can prioritize
              troubleshooting. Additionally, Oasis Analytics proactively finds at-risk applications and devices, then alerts to
              their deterioration and heightened risk to the business. The synthetic Application Assurance tool constantly
              checks real world transactions for response time and availability. Systems are confirmed for both availability
              and reachability. For example, Oasis knows that a service may be unavailable because the NAS is unreachable
              due to a faulty switch. But the NAS is working properly and the appropriate team is dispatched to repair the
              switch. <br/><br/>
              The Oasis Event Manager is viewed through a single dashboard view and organized in a built-in view or by
              readily customizable templates. This flexibility matches the way your personnel work today so productivity is
              immediate and resolution times are reduced. The Oasis Dashboards are all convertible to Reports which can be
              scheduled, mailed or published to any portal. Key information is generated out-of-the-box, such as the Top
              Devices with Events and the Top Events generated. When maintenance windows are implemented, Oasis knows
              how to calibrate for Availability and Performance metrics and keeps alerts from being generated to the
              Helpdesk. Save your staff time and headaches.</p>
  },
  {
    id: 6,
    altText: 'Trap Adapter SNMP',

    img: '/static/images/trapadaptormodal.jpg',
    subtitle: <h4>The Oasis Trap Adapter SNMP</h4>,
    caption: <div className="ptype">The Oasis Trap Adapter is a fully configurable Trap Listener and Forwarder with native integration to the Oasis Platform. When you leverage the easy-to-use Oasis web application, you can fully configure all features, including the trap exploder and forwarder. Simply, point all of your device traps to the IP address of our trap adaptor and it just works! The Oasis Trap Adapter handles millions of traps per day on a single node.<br/><br/>
                <h4>At-A-Glance:</h4>
                <ul>
                  <li>SNMP Trap Listener</li>
                  <li>Immediate event generation</li>
                  <li>Enterprise scalability</li>
                  <li>Pre-built trap definitions cover thousands of different device manufacturers</li>
                  <li>Create your own trap definitions in Oasis to capture your custom or vendor specific traps</li>
                  <li>Create custom automation flows</li>
                  <li>No limitation to what traps we can receive</li>
                  <li>Fully configurable with Oasis API and Oasis Manager</li>
                  <li>Integrates seamlessly with the Oasis Platform, Oasis CMDB, Oasis Automation, Oasis Reporting and Dashboards, and Service Desks</li>
                </ul>
            </div>
  },
  {
    id: 7,
    altText: 'The Oasis API',

    img: '/static/images/apisuitemodal.jpg',
    subtitle: <h4>The Oasis API is a full feature REST API for CMDB/Assets, Performance, Incidents and Automation.</h4>,
    caption: <div className="ptype">We designed the API to be as simple as possible while also being both powerful and flexible. We use the same API internally when creating integrations with other monitoring and service desk systems.
              <h4>Features:</h4>
                <ul>
                  <li>Easy to learn, simple to use</li>
                  <li>Push notifications into Oasis</li>
                  <li>Save any performance metrics from custom applications into Oasis</li>
                  <li>Manage your automation workflows and digital operations</li>
                  <li>Intelligent automation for IT Incident Management</li>
                </ul>
                <ul>
                  <li>IOT Ready</li>
                  <li>Oasis Automation Ready</li>
                  <li>CMDB/ Asset Management Ready</li>
                  <li>Get any data (time-series or current) from the Oasis Platform</li>
                  <li>Integrate any new system with Oasis in less than 5 minutes</li>
                </ul>
              <p>Request a copy of the Oasis API Document today.</p>
              </div>
  },
  {
    id: 8,
    altText: 'Cybervision Cybersecurity',

    img: '/static/images/cybervisionmodal.jpg',
    subtitle: <h4>All-in-One Security Solution</h4>,
    caption: <p>Cybervision is our leading all-in-one cybersecurity service, protecting your enterprise from cybersecurity attacks and keeping you in control of your security protocols. Extend your team with some of America's leading defense experts who leverage the renowned Mitre ATT&CK Matrix in tandem with the Oasis platform. If you've tried to attract and retain the talent needed to staff a Security Operations Center then you will appreciate getting a commitment that these skills are watching every move on your network and on your endpoints, 24 x 7 x 365.</p>
  }
];

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.currentIndex?props.currentIndex:0,
      items: props.contentName==='product'?productItems:[
       {
         id: 1,
         altText: 'Architecture',

         img: '/static/images/device.png',
         subtitle: <h4></h4>,
         caption: <p>The Oasis Platform was designed from the ground up with three key concepts in mind: aggregation, automation. and control. Along with the built-in discovery and monitoring capabilities, this enterprise-ready solution aggregates data from any monitoring service or tool for the management of applications and infrastructure. Providing views of the managed environment in a single interface via alerting, dashboards, and charts, Oasis enables instant identification and analysis of the impact on services in real-time; as well as providing historical data for reporting, trending, and capacity planning. <br/><br/>See our full <a onClick={()=>this.setState({items:productItems})}>product suites</a> for more information.</p>
       }
     ]
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.state.items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={item.id}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          {/* <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={''} /> */}
          <div className="item-content">
            <div className="row">
              <div className="col-md-5 col-sm-12">
                <img src={item.img} />
              </div>
              <div className="col-md-7 col-sm-12">
                <h3>{item.altText}</h3>
                {item.subtitle}
                {item.caption}
              </div>
            </div>
           </div>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              }`
          }
        </style>
        <ul className="modal-header">
          {
            this.state.items.map((item, index) => {
              return(<li key={index} className={item.id===this.state.activeIndex+1?'active':''} onClick={()=>this.goToIndex(item.id-1)}>{item.altText}</li>)
            })
          }
        </ul>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={null}
        >
          {/* <CarouselIndicators items={this.state.items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
        {this.props.type==='desktop' && <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
          <span aria-hidden="true">&times;</span>
        </button>}
      </div>
    );
  }
}
export default Product;
