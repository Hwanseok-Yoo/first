import cv2

image = cv2.imread("2.jpg")

image = image[2065:4898, : , :]
dst = cv2.resize(image, dsize=(1920, 1080), interpolation=cv2.INTER_AREA)

cv2.imwrite('sam/2.jpg', image)
