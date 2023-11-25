file(GLOB sources "*.cpp")
file(GLOB headers "*.h")

add_library(devcore ${sources} ${headers})

target_include_directories(devcore PRIVATE ../utils)
target_link_libraries(devcore)