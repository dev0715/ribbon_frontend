import React, { useCallback } from "react";
import styled from "styled-components";
import { SecondaryText, Subtitle, Title } from "../../designSystem";

import colors from "../../designSystem/colors";
import theme from "../../designSystem/theme";
import useAssetPrice from "../../hooks/useAssetPrice";
import useVaultData from "../../hooks/useVaultData";
import { CurrencyType } from "../../pages/Portfolio/types";
import { ethToUSD, toETH } from "../../utils/math";

const PerformanceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border: ${theme.border.width} ${theme.border.style} ${colors.border};
  border-radius: ${theme.border.radius};
  margin-top: 24px;
`;

const PerformanceColumn = styled.div`
  width: 100%;
  border-bottom: ${theme.border.width} ${theme.border.style} ${colors.border};
  display: flex;
  flex-wrap: wrap;

  &:last-child {
    border-bottom: unset;
  }
`;

const DepositColumn = styled(PerformanceColumn)`
  padding: 16px;
`;

const KPIColumn = styled.div`
  width: 50%;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;

  &:first-child {
    border-right: ${theme.border.width} ${theme.border.style} ${colors.border};
  }
`;

const ColumnLabel = styled(SecondaryText)`
  font-size: 12px;
  width: 100%;
`;

const KPI = styled.div`
  display: flex;
  align-items: center;
`;

const DepositAmount = styled(Title)`
  font-size: 40px;
  line-height: 48px;
`;

const DepositCurrency = styled(Subtitle)`
  font-size: 16px;
  margin-left: 16px;
  color: rgba(255, 255, 255, 0.16);
  text-transform: uppercase;
`;

const DepositText = styled(Title)`
  font-size: 18px;
  line-height: 24px;
  color: ${colors.green};
`;

interface PortfolioPerformanceProps {
  currency: CurrencyType;
}

const PortfolioPerformance: React.FC<PortfolioPerformanceProps> = ({
  currency,
}) => {
  const { status, vaultBalanceInAsset } = useVaultData();
  const ethPrice = useAssetPrice({ asset: "WETH" });

  const getDepositAmount = useCallback(() => {
    switch (currency) {
      case "eth":
        return toETH(vaultBalanceInAsset);
      case "usd":
        return ethToUSD(vaultBalanceInAsset, ethPrice);
    }
  }, [currency, vaultBalanceInAsset, ethPrice]);

  const renderDepositData = useCallback(
    () =>
      status === "loading" ? (
        <></>
      ) : (
        <KPI>
          <DepositAmount>{getDepositAmount()}</DepositAmount>
          <DepositCurrency>{currency}</DepositCurrency>
        </KPI>
      ),
    [currency, status, getDepositAmount]
  );

  return (
    <PerformanceContainer>
      <DepositColumn>
        <ColumnLabel>Deposits</ColumnLabel>
        {renderDepositData()}
      </DepositColumn>
      <PerformanceColumn>
        <KPIColumn>
          <ColumnLabel>Yield Earned</ColumnLabel>
          <KPI>
            <DepositText>+10.12</DepositText>
            <DepositCurrency>{currency}</DepositCurrency>
          </KPI>
        </KPIColumn>
        <KPIColumn>
          <ColumnLabel>ROI</ColumnLabel>
          <DepositText>+35.42%</DepositText>
        </KPIColumn>
      </PerformanceColumn>
    </PerformanceContainer>
  );
};

export default PortfolioPerformance;
