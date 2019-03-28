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
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    id: 2,
    altText: 'Oasis Discovery',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    id: 3,
    altText: 'Oasis Application & Infrastructure Monitoring',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    id: 4,
    altText: 'Oasis Analytics',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    id: 5,
    altText: 'Oasis Event Manager',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    altText: 'Oasis Trap Adaptor',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    id: 7,
    altText: 'Oasis API suite',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    id: 8,
    altText: 'Cybervision',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
  }
];
 const platformItems = [
  {
    id: 1,
    altText: 'Core Features',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
    id: 2,
    altText: 'Architecture',
    title: 'Event Manager Tool',
    img: 'images/device.png',
    subtitle: 'Reduce Noise with The Oasis Event Manager',
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
  }
];

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: props.currentIndex?props.currentIndex:0,
      items: props.contentName==='product'?productItems:platformItems
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
                <h4>{item.subtitle}</h4>
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
          interval={this.props.interval?this.props.interval:null}
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
