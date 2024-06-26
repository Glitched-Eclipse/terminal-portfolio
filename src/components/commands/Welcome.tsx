import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
 _____  ___    __     __   ___  __    __   __    ___       
(\"   \|"  \  |" \   |/"| /  ")/" |  | "\ |" \  |"  |      
|.\\   \    | ||  |  (: |/   /(:  (__)  :)||  | ||  |      
|: \.   \\  | |:  |  |    __/  \/      \/ |:  | |:  |      
|.  \    \. | |.  |  (// _  \  //  __  \\ |.  |  \  |___   
|    \    \ | /\  |\ |: | \  \(:  (  )  :)/\  |\( \_|:  \  
 \___|\____\)(__\_|_)(__|  \__)\__|  |__/(__\_|_)\_______) 
                                                                                    
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
 _______    _______   __    __       __        _______        __      
|   _  "\  /"     "| /" |  | "\     /""\      /"      \      /""\     
(. |_)  :)(: ______)(:  (__)  :)   /    \    |:        |    /    \    
|:     \/  \/    |   \/      \/   /' /\  \   |_____/   )   /' /\  \   
(|  _  \\  // ___)_  //  __  \\  //  __'  \   //      /   //  __'  \  
|: |_)  :)(:      "|(:  (  )  :)/   /  \\  \ |:  __   \  /   /  \\  \ 
(_______/  \_______) \__|  |__/(___/    \___)|__|  \___)(___/    \___)
                                                                      

          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 1.3.1)</div>
        <Seperator>----</Seperator>
       <p> The Night is Darkest before the Dawn. - <b>The Darkest Knight.</b> </p>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                       ,##,,eew,
                     ,##############C
                  a###############@##
                 7####^\`^"7W7^"@####
                 @#@b\`         ^@#@^
                  ##^,,,,   ,,,,^#^
                 ,,@######"#######=
                  .''555"\` '5555b|
                  T"@  ,,,^,mg,@,*
                     %p||\`~~'.#\`
                      ^Wp  ,#T
                     :b''@@b^}
                  ,^     \` 'b 3-
              .<\` 'p   ^v   #   b   *.
            {      }   #"GpGb   [
            C      3 * @#######Nl      \`
           '            ^@##b     ($    !
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
