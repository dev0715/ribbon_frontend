import React, { useRef } from "react";
import styled from "styled-components";
import colors from "shared/lib/designSystem/colors";
import theme from "shared/lib/designSystem/theme";
import { getAssetLogo } from "shared/lib/utils/asset";
import {
  Chains,
  CHAINS_TO_NATIVE_TOKENS,
} from "shared/lib/constants/constants";
import { useChain } from "shared/lib/hooks/chainContext";
import WalletConnectModal from "../Wallet/WalletConnectModal";
import useConnectWalletModal from "shared/lib/hooks/useConnectWalletModal";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${theme.border.radius};
  background: ${colors.background.two};
  height: 48px;
  width: 48px;
  padding: 8px 8px;

  &:hover {
    svg {
      path {
        opacity: ${theme.hover.opacity};
      }
    }
  }
`;

const NetworkSwitcherButton = () => {
  const desktopMenuRef = useRef(null);
  const [chain] = useChain();
  const [, setShowModal] = useConnectWalletModal();
  const logoSize = 40;
  const Logo =
    chain !== Chains.NotSelected
      ? getAssetLogo(CHAINS_TO_NATIVE_TOKENS[chain])
      : () => null;

  return (
    <div className="d-flex position-relative" ref={desktopMenuRef}>
      {chain !== Chains.NotSelected && (
        <ButtonContainer role="button" onClick={() => setShowModal(true)}>
          <Logo
            style={{ padding: 0 }}
            height={logoSize}
            width={logoSize}
          ></Logo>
        </ButtonContainer>
      )}

      <WalletConnectModal></WalletConnectModal>
    </div>
  );
};

export default NetworkSwitcherButton;
