import React from "react";
import {
  Card,
  Heading,
  Text,
  Icon,
  Modal,
  Flex,
  Box,
  Button,
  MetaMaskButton,
  Link
} from "rimble-ui";
import GeneralUtil from "../GeneralUtil";
class ConnectionModal extends React.Component {
  state = {
    showTxFees: false
  };

  toggleShowTxFees = e => {
    console.log("showTxFees", this.state.showTxFees);
    e.preventDefault();

    this.setState({
      showTxFees: !this.state.showTxFees
    });
  };

  render() {
    return (
      <Modal isOpen={this.props.isOpen}>
        <Card py={[3, 5]} px={[0, 5]} maxWidth={"960px"} overflow={"hidden"}>
          <Box position={"relative"}>
            <Flex
              justifyContent={"flex-end"}
              mr={[0, -5]}
              mt={[-3, -5]}
              position={"absolute"}
              top={"0"}
              left={"0"}
              right={"0"}
              bg={"white"}
            >
              <Button.Text
                icononly
                icon={"Close"}
                color={"moon-gray"}
                onClick={this.props.closeModal}
              />
            </Flex>
          </Box>

          {this.state.showTxFees === false ? (
            <Box>
              {/* Modal content */}
              <Box
                style={{ overflow: "auto" }}
                maxHeight={"calc(100vh - 113px)"}
              >
                <Box py={[3, 0]} px={[2, 0]}>
                  <Box mb={3}>
                    <Heading.h2>Connect to Rimble App Demo</Heading.h2>
                    <Text my={3}>
                      You need to connect your Ethereum account to use our blockchain features.
                    </Text>
                  </Box>

                  <Flex
                    flexWrap={"wrap"}
                    justifyContent={"space-between"}
                    mx={-2}
                    mt={4}
                    mb={4}
                  >
                    <Box width={[1, 1, 1 / 3]} px={2} my={3}>
                      <Flex justifyContent={"center"}>
                        <Icon color="primary" size="60" name="Public" />
                      </Flex>
                      <Heading.h5>The blockchain is public</Heading.h5>
                      <Text fontSize="1">
                        Your Ethereum account activity is public on the
                        blockchain. Choose an account you don’t mind being
                        linked with your activity here.
                      </Text>
                    </Box>
                    <Box width={[1, 1, 1 / 3]} px={2} my={3}>
                      <Flex justifyContent={"center"}>
                        <Icon
                          color="primary"
                          size="60"
                          name="AccountBalanceWallet"
                        />
                      </Flex>
                      <Heading.h5>Have some Ether for fees</Heading.h5>
                      <Text fontSize="1">
                        You’ll need Ether to pay transaction fees. Buy Ether
                        from exchanges like Coinbase.
                      </Text>
                      <Link
                        title="Learn about Ethereum transaction fees"
                        as={"a"}
                        href="#"
                        onClick={this.toggleShowTxFees}
                      >
                        What are transaction fees?
                      </Link>
                    </Box>
                    <Box width={[1, 1, 1 / 3]} px={2} my={3}>
                      <Flex justifyContent={"center"}>
                        <Icon color="primary" size="60" name="People" />
                      </Flex>
                      <Heading.h5>Have the right account ready</Heading.h5>
                      <Text fontSize="1">
                        If you have multiple Ethereum accounts, check that the
                        one you want to use is active in your browser.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              {/* End Modal Content */}

              <Box
                position={"absolute"}
                bottom={"0"}
                left={"0"}
                right={"0"}
                p={2}
                bg={"white"}
              >
                <Flex borderTop={1} borderColor={"#999"} />
                <Flex mt={3} justifyContent={["center", "flex-end"]}>
                  {GeneralUtil.hasMetaMask() ? (
                    <MetaMaskButton onClick={this.props.validateAccount}>
                      Connect with MetaMask
                    </MetaMaskButton>
                  ) : (
                    <Button onClick={this.props.validateAccount}>
                      Connect
                    </Button>
                  )}
                </Flex>
              </Box>
            </Box>
          ) : (
            <Box mb={3}>
              {/* Start modal content */}
              <Box
                style={{ overflow: "auto" }}
                maxHeight={"calc(100vh - 113px)"}
              >
                <Box py={[3, 0]} px={[2, 0]}>
                  <Heading.h2>Transaction fees</Heading.h2>
                  <Text my={3}>
                    You need to pay a fee to use the Ethereum blockchain. This
                    pays for someone to process your transaction and store the
                    data.
                  </Text>
                  <Heading.h4>What are you paying for?</Heading.h4>
                  <Flex
                    flexWrap={"wrap"}
                    justifyContent={"space-between"}
                    mx={-2}
                    my={3}
                  >
                    <Box width={[1, 1, 1 / 3]} px={2} my={3}>
                      <Flex justifyContent={"center"}>
                        <Icon color="primary" size="60" name="Fingerprint" />
                      </Flex>
                      <Heading.h4>Undeniable proof</Heading.h4>
                      <Text>
                        You get a public record of any funds you send or
                        receive, a bit like a deed for a house.
                      </Text>
                    </Box>
                    <Box width={[1, 1, 1 / 3]} px={2} my={3}>
                      <Flex justifyContent={"center"}>
                        <Icon
                          color="primary"
                          size="60"
                          name="EnhancedEncryption"
                        />
                      </Flex>
                      <Heading.h4>Unbreakable encryption</Heading.h4>
                      <Text>
                        Your funds can only ever go to your intended recipients.
                      </Text>
                    </Box>
                    <Box width={[1, 1, 1 / 3]} px={2} my={3}>
                      <Flex justifyContent={"center"}>
                        <Icon color="primary" size="60" name="AccountBalance" />
                        <Icon color="primary" size="60" name="NotInterested" />
                      </Flex>
                      <Heading.h4>Unparalleled control</Heading.h4>
                      <Text>
                        You can pay or get paid without using any banks or
                        companies.
                      </Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              {/* End Modal Content */}

              <Box
                position={"absolute"}
                bottom={"0"}
                left={"0"}
                right={"0"}
                p={2}
                bg={"white"}
              >
                <Flex borderTop={1} borderColor={"#999"} />
                <Flex mt={3} justifyContent={["center", "flex-end"]}>
                  <Button.Outline
                    width={[1, "auto"]}
                    onClick={this.toggleShowTxFees}
                  >
                    Go back
                  </Button.Outline>
                </Flex>
              </Box>
            </Box>
          )}
        </Card>
      </Modal>
    );
  }
}

export default ConnectionModal;
