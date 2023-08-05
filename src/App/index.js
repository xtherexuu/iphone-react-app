import {
  Iphone,
  TopCameraSpace,
  TopCamera,
  Nav,
  RightNav,
  LeftNav,
  AppContainer,
  BackgroundFrame,
  BackgroundImage,
  ExtraBgOne,
  ExtraBgTwo,
  TimeAndDate,
  Time,
  Date,
  LockedScreenNav,
  LockScreen,
  LockedNavLeft,
  LockedNavRight,
  Button,
  ApplicationMenu,
  Applications,
  AppButton,
  AppName,
  AppSlideOne,
  AppSlideTwo,
  Icon,
  IconSection,
  Indicators,
  BottomNav,
} from "./styled";
import React, { useState } from "react";
import {
  Cellular,
  Wifi,
  BatteryHalf,
  Camera,
  Flashlight,
  Videocam,
  Book,
  Mail,
  Star,
  LogoApple,
  LogoAppleAppstore,
  Call,
  Home,
  MusicalNote,
  Chatbubble,
  Heart,
  LogoXbox,
  LogoPlaystation,
  Chatbubbles,
  RadioButtonOn,
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
  LogoPinterest,
  LogoGithub,
  LogoYoutube,
  LogoWhatsapp,
  LogoSnapchat,
} from "react-ionicons";
import useDate from "./useDate";

function App() {
  const [page, setPage] = useState(1);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const date = useDate();

  return (
    <>
      <Button
        testing
        onClick={() => {
          setIsUnlocked((status) => (status = !status));
        }}
      />
      <Iphone>
        <TopCameraSpace>
          <TopCamera></TopCamera>
        </TopCameraSpace>

        <Nav>
          <LeftNav>
            <Time small>
              {date.toLocaleTimeString("pl-PL", {
                hour: "numeric",
                minute: "numeric",
              })}
            </Time>
          </LeftNav>
          <RightNav>
            <Cellular color="white" width="14px" height="14px" />
            <Wifi color="white" width="14px" height="14px" />
            <BatteryHalf color="white" width="14px" height="14px" />
          </RightNav>
        </Nav>

        <AppContainer>
          <BackgroundImage>
            <BackgroundFrame>
              <ExtraBgOne></ExtraBgOne>
              <ExtraBgTwo></ExtraBgTwo>
            </BackgroundFrame>
          </BackgroundImage>

          <LockScreen isUnlocked={isUnlocked}>
            <TimeAndDate isUnlocked={isUnlocked}>
              <Time>
                {date.toLocaleTimeString("pl-PL", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </Time>
              <Date>Saturday, October 29</Date>
            </TimeAndDate>
            <LockedScreenNav isUnlocked={isUnlocked}>
              <LockedNavLeft>
                <Button>
                  <Flashlight color="white" width="15px" height="15px" />
                </Button>
              </LockedNavLeft>
              <LockedNavRight>
                <Button>
                  <Camera color="white" width="15px" height="15px" />
                </Button>
              </LockedNavRight>
            </LockedScreenNav>
            <Button
              openButton
              isUnlocked={isUnlocked}
              onClick={() => {
                setIsUnlocked(true);
              }}
            >
              Click me to open
            </Button>
          </LockScreen>

          <ApplicationMenu isUnlocked={isUnlocked}>
            <Applications page={page}>
              <AppSlideOne>
                <IconSection>
                  <Icon>
                    <AppButton faceTime>
                      <Videocam width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>FaceTime</AppName>
                  </Icon>
                  <Icon>
                    <AppButton camera>
                      <Camera width="25px" height="25px" color="black" />
                    </AppButton>
                    <AppName>Camera</AppName>
                  </Icon>
                  <Icon>
                    <AppButton mail>
                      <Mail width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Mail</AppName>
                  </Icon>
                  <Icon>
                    <AppButton ibook>
                      <Book width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>ibook</AppName>
                  </Icon>
                </IconSection>

                <IconSection>
                  <Icon>
                    <AppButton ituneStore>
                      <Star width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>ituneStore</AppName>
                  </Icon>
                  <Icon>
                    <AppButton video>
                      <LogoApple width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Video</AppName>
                  </Icon>
                  <Icon>
                    <AppButton appleStore>
                      <LogoAppleAppstore
                        width="25px"
                        height="25px"
                        color="white"
                      />
                    </AppButton>
                    <AppName>Apple Store</AppName>
                  </Icon>
                  <Icon>
                    <AppButton phone>
                      <Call width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Phone</AppName>
                  </Icon>
                </IconSection>

                <IconSection>
                  <Icon>
                    <AppButton home>
                      <Home width="25px" height="25px" color="#deb805" />
                    </AppButton>
                    <AppName>Home</AppName>
                  </Icon>
                  <Icon>
                    <AppButton itune>
                      <MusicalNote width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>itune</AppName>
                  </Icon>
                  <Icon>
                    <AppButton message>
                      <Chatbubble width="25px" height="25px" color="black" />
                    </AppButton>
                    <AppName>Message</AppName>
                  </Icon>
                  <Icon>
                    <AppButton health>
                      <Heart width="25px" height="25px" color="#cd0d54" />
                    </AppButton>
                    <AppName>Health</AppName>
                  </Icon>
                </IconSection>
                <IconSection>
                  <Icon>
                    <AppButton xbox>
                      <LogoXbox width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Xbox</AppName>
                  </Icon>
                  <Icon>
                    <AppButton playstation>
                      <LogoPlaystation
                        width="25px"
                        height="25px"
                        color="white"
                      />
                    </AppButton>
                    <AppName>Playstation</AppName>
                  </Icon>
                  <Icon>
                    <AppButton messenger>
                      <Chatbubbles width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Messenger</AppName>
                  </Icon>
                  <Icon>
                    <AppButton spotify>
                      <RadioButtonOn
                        width="25px"
                        height="25px"
                        color="rgb(5, 175, 5)"
                      />
                    </AppButton>
                    <AppName>Spotify</AppName>
                  </Icon>
                </IconSection>
              </AppSlideOne>

              <AppSlideTwo>
                <IconSection>
                  <Icon>
                    <AppButton facebook>
                      <LogoFacebook width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Facebook</AppName>
                  </Icon>
                  <Icon>
                    <AppButton instagram>
                      <LogoInstagram width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Instagram</AppName>
                  </Icon>
                  <Icon>
                    <AppButton twitter>
                      <LogoTwitter width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Twitter</AppName>
                  </Icon>
                  <Icon>
                    <AppButton pinterest>
                      <LogoPinterest width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Pinterest</AppName>
                  </Icon>
                </IconSection>
                <IconSection>
                  <Icon>
                    <AppButton github>
                      <LogoGithub width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Github</AppName>
                  </Icon>
                  <Icon>
                    <AppButton youtube>
                      <LogoYoutube width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>YouTube</AppName>
                  </Icon>
                  <Icon>
                    <AppButton whatsapp>
                      <LogoWhatsapp width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Whatsapp</AppName>
                  </Icon>
                  <Icon>
                    <AppButton snapchat>
                      <LogoSnapchat width="25px" height="25px" color="white" />
                    </AppButton>
                    <AppName>Snapchat</AppName>
                  </Icon>
                </IconSection>
              </AppSlideTwo>
            </Applications>
            <Indicators>
              <Button
                onClick={() => {
                  setPage(1);
                }}
                indicator
                isActive={page === 1}
              ></Button>
              <Button
                onClick={() => {
                  setPage(2);
                }}
                indicator
                isActive={page === 2}
              ></Button>
            </Indicators>

            <BottomNav>
              <Icon>
                <AppButton phone>
                  <Call />
                </AppButton>
              </Icon>
              <Icon>
                <AppButton itune>
                  <MusicalNote />
                </AppButton>
              </Icon>
              <Icon>
                <AppButton message>
                  <Chatbubble />
                </AppButton>
              </Icon>
              <Icon>
                <AppButton appleStore>
                  <LogoAppleAppstore />
                </AppButton>
              </Icon>
            </BottomNav>
          </ApplicationMenu>

          <Button mainButton />
        </AppContainer>
      </Iphone>
    </>
  );
}

export default App;
