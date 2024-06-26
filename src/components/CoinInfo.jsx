import { Flex, Typography } from "antd";

export default function CoinInfo({ coin, withSymbol }) {
    
  return (
    <Flex align="center">
      <img src={coin.icon} alt={coin.name} style={{ width: 40 }} />
      <Typography.Title level={2} style={{ marginBottom: 0, marginLeft: 10 }}>
        {withSymbol && coin.symbol}
        {coin.name}
      </Typography.Title>
    </Flex>
  );
}
