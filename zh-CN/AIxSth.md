[WIP] AI x sth 的一些思考

---

我会认为，GenAI 与人相比一个很大的不足（而且短期内也难以追平）是“在巨量信息下剪枝获取自己更需要信息的能力，既要通过剪枝让信息量小到可以被人处理，也要避免漏掉关键信息”这项能力。目前，GenAI 学习到的更多是文字这种半结构化的信息（哪怕是图片视频相较于人的感知来说信息量也是很少的），在初步对信息大幅剪枝的能力上还是很欠缺的。
我认为人的决策模型类似一个简单的反射弧，其主要由三部分（感受器、神经中枢、效应器）组成，伪代码如下所示：

```
while true:
all_sensor_data = self.readAllMySensors()
filtered_data = self.system1.filter(all_sensor_data)
action = self.system2.handle(filtered_data)
self.doAction(action)
```

相较于一个简单反射弧，完整决策模型的区别在于，由于人体的感受器过于多，接受信息数量太多，而大脑无法处理庞大的信息，因而需要在“思考”前首先通过一个系统将接受到的绝大部分信息 drop 掉，使得思考成为可能（这也是我认为人为什么会遗忘的原因）。
不妨思考一个问题：流水线的操作工人与有创造力的手艺人区别在于哪里？我的一个解释是，手艺人日常工作的熵更大，他有更好的压缩熵的能力和效率

https://docs.qq.com/doc/DQ0plY0JDbXFKUmtU?_t=1704260377258&u=6cf2146f8f4f4cac915f1203c68444ad
https://mp.weixin.qq.com/s/-wSYLu-XvOrsST8_KEUa-Q
https://mp.weixin.qq.com/s/V9_5fnyCNwd-kYrVkyh9zw
