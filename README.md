>[!IMPORTANT]
>This version lacks an API and a backend. The backend can be built from using the following command: `docker run --hostname=a29746387083 --env=PATH=/usr/local/nvidia/bin:/usr/local/cuda/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=NVARCH=x86_64 --env=NVIDIA_REQUIRE_CUDA=cuda>=11.2 brand=tesla,driver>=418,driver<419 brand=tesla,driver>=450,driver<451 --env=NV_CUDA_CUDART_VERSION=11.2.152-1 --env=NV_CUDA_COMPAT_PACKAGE=cuda-compat-11-2 --env=CUDA_VERSION=11.2.2 --env=LD_LIBRARY_PATH=/usr/local/cuda-11.0/targets/x86_64-linux/lib:/usr/local/cuda/extras/CUPTI/lib64:/usr/local/cuda/lib64:/usr/local/nvidia/lib:/usr/local/nvidia/lib64 --env=NVIDIA_VISIBLE_DEVICES=all --env=NVIDIA_DRIVER_CAPABILITIES=compute,utility --env=DEBIAN_FRONTEND=noninteractive --env=LANG=C.UTF-8 --network=bridge -p 8000:8000 --restart=no --label='author=Jana Schor, Patrick Scheibe, Matthias Bernt' --label='maintainer=NVIDIA CORPORATION <cudatools@nvidia.com>' --label='org.opencontainers.image.ref.name=ubuntu' --label='org.opencontainers.image.version=20.04' --label='version=1.0' --runtime=runc -t -d hemoguard`

# HemoGuard
HemoGuard uses AI and a small blood sample to help diagnose and detect any anomalies in a person's circulatory system.

# About this prototype
>[!WARNING]
>It is possible for the current prototype to count a molecule multiple times.

This prototype is designed to collect data processed by the GNN from deepFPlearn+. It is able to count the number of potentially "risky" molecules detected, as well as which systems they may affect.
