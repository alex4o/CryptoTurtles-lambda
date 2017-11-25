x <- paste('R_Model/',input, ".rds", sep="")

model <- readRDS(x)
model$coeff
