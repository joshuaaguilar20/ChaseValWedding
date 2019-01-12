/**
 * Main entry point for the client application.
 */

'use strict';

import React from 'react';
import Sticky from 'react-stickynode';
import Menu from './components/Menu.component';
import RSVPForm from './components/RSVPForm.component';
import TitleBar from './components/TitleBar.component';
import TopicContainer from './components/TopicContainer.component';



class WebsiteContent extends React.Component {
  render() {
    return (
      <div>

        <TitleBar id="titlebar">
        </TitleBar>

        <div style={{ height: '200px' }}></div>

        <Sticky enabled={true}>
          <Menu id="menu"
            items={[{ label: 'THE BRIDE & GROOM', href: 'brideandgroom' },
            { label: 'THE WEDDING', href: 'wedding' },
            { label: 'RSVP', href: 'rsvp' },
            { label: 'Guest? ', href: 'thingstodo' },
            { label: 'GIFTS', href: 'gifts' }]}>
          </Menu>
        </Sticky>
        <TopicContainer id="brideandgroom" name="brideandgroom" title="The Bride and Groom">
          <div className="container">
            <div className="row">
              <div className="one-half column">
                <p>
                  <a href="img/jocelyn-baby.jpg"><img className="thumbnail" src="img/jocelyn-baby.jpg" alt="Jocelyn" /></a>
                  We need info about how val. like she is romanian, how you guys met.
            </p>
              </div>

              <div className="one-half column">
                <p>
                  <a href="img/kal-baby.jpg"><img className="thumbnail" src="img/kal-baby.jpg" alt="Kal" /></a>
                  Chase is a paramedic born and raised in Kansas City Kansas. He met val .... how

            </p>
              </div>
            </div>
          </div>

          <hr />

          <p>
            <img className="large-image" src="/img/chasepropsal.jpg" alt="Chase Proposing To Valentina" />
          </p>

          <h2>OUR STORY</h2>
          <p>
            chase and val met when????? how???
      </p>
        </TopicContainer>

        <TopicContainer id="wedding" title="Wedding">
          <div className="container">
            <div className="one-half column">
              <h2>CEREMONY</h2>
              <p>16:45 @ Josh does not know yet</p>
              <p>
                <a href="img/svetimarak.jpg"><img className="location-image" src="img/svetimarak.jpg" alt="Sveti Marak (St Mark's)" /></a>
              </p>
              <p style={{ textAlign: "center" }}>
                <a href="https://goo.gl/maps/7oeGdedkbM72">Google Maps</a> | <a href="img/city-hvar-map.jpg">Tourist Map</a>
              </p>
              <p>Located at the ummmm ( need location info and address for google maps* )
          </p>
            </div>
            <div className="one-half column">
              <h2>RECEPTION</h2>
              <p>18:15 @  Moose Lodge </p>
              <p>
                <a href="img/bonjlesbainsbeachclub.jpg"><img className="location-image" src="img/bonjlesbainsbeachclub.jpg" alt="Bonj Les Bains Beach Club" /></a>
              </p>
              <p style={{ textAlign: "center" }}>
                <a href="https://goo.gl/maps/MGBa94iBaA42">Google Maps</a> | <a href="img/city-hvar-map.jpg">Tourist Map</a>
              </p>
              <p>Located somewhere
          </p>
            </div>
          </div>

          <hr />

          <h2>ON THE WEDDING DAY</h2>
          <p>The ceremony will start at 17:00. Please arrive 10 to 15 minutes before so everybody can get
             seated and so we can start on time.
      </p>
          <p>After the ceremony we will raise a glass of champagne and someone will lead you to the reception where drinks and appetizers will
             be served.
      </p>
          <p>
            Wedding attire is Fall formal. Gentlemen, please wear a cheap suit :)
      </p>

          <hr />

          <h2>DAY BEFORE THE WEDDING (Oct.4th)</h2>
          <p>Welcome cocktails will be held on the terrace of <a href="https://goo.gl/Vd3ZJd">Restaurant Park Hvar</a> from 18:30 to 23:30.
      </p>
          <p>
            Cocktail night attire is dressy-casual.
      </p>

          <hr />

          <h2>I can add anything you want Here List ETC</h2>
          <p>Farewell brunch will be held at 11:00 at the&nbsp;
         <a href="http://www.suncanihvar.com/amfora-hvar-grand-beach-resort/maestral-balkan-grill.html">Maestral Restaurant</a>. It is located
         just a few meters on the path that takes you to the <a href="https://goo.gl/r9TFHt">wedding venue</a>.
      </p>
          <p>

          </p>
        </TopicContainer>

        <TopicContainer id="rsvp" title="RSVP">
          <RSVPForm>
          </RSVPForm>
        </TopicContainer>
        <TopicContainer id="gifts" title="Gifts">
          <p>Dear family and friends,</p>
          <p>
          </p>
          <p>GIFT LIST OR STUFF you guys want to add,
      </p>
          <p>Thank you in advance!
      </p>
        </TopicContainer>

      </div>
    );
  };
}


export default WebsiteContent