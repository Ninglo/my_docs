研究了一下，它这套权限系统有些复杂，但我们只用取 Plan 功能这个子集应该就够用。
我初步的理解是，权限分为两块：
1. 社区成员权限，拥有这个权限才能进入社区
2. 单 Space 权限，拥有这个权限才能进入特定 Space

每个 Plan 相当于一个身份，它可以赋予用户上述两种权限。
感觉我们默认把全部的 Space 都设置为 Private，然后根据不同的 Plan 类型开放对应 Space 的权限就够了（每个Plan 都默认开启社区入口权限，这样就只需要考虑 2 权限，逻辑简单些）。
我等下注册几个小号验证下流程。
