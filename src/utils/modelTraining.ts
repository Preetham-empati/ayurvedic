import * as tf from '@tensorflow/tfjs';

// Define the model architecture
export function createModel() {
  const model = tf.sequential();
  
  // Simplified architecture for faster training
  model.add(tf.layers.conv2d({
    inputShape: [224, 224, 1],
    filters: 16,
    kernelSize: 3,
    activation: 'relu',
  }));
  model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
  
  model.add(tf.layers.conv2d({
    filters: 32,
    kernelSize: 3,
    activation: 'relu',
  }));
  model.add(tf.layers.maxPooling2d({ poolSize: 2 }));
  
  model.add(tf.layers.flatten());
  model.add(tf.layers.dense({ units: 64, activation: 'relu' }));
  model.add(tf.layers.dropout({ rate: 0.3 }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

  model.compile({
    optimizer: tf.train.adam(0.001),
    loss: 'binaryCrossentropy',
    metrics: ['accuracy'],
  });
  
  return model;
}

// Preprocess image data
export async function preprocessImage(imageElement: HTMLImageElement): Promise<tf.Tensor4D> {
  return tf.tidy(() => {
    try {
      const tensor = tf.browser.fromPixels(imageElement, 1)
        .resizeBilinear([224, 224])
        .expandDims(0)
        .toFloat()
        .div(255.0);
      
      return tensor as tf.Tensor4D;
    } catch (error) {
      console.error('Error preprocessing image:', error);
      throw new Error('Failed to preprocess image');
    }
  });
}

// Generate synthetic data with Web Workers
function generateSyntheticData(numSamples: number): [tf.Tensor4D, tf.Tensor2D] {
  return tf.tidy(() => {
    try {
      const imageSize = [224, 224, 1];
      const images = new Float32Array(numSamples * imageSize[0] * imageSize[1] * imageSize[2]);
      const labels = new Float32Array(numSamples);

      for (let i = 0; i < numSamples; i++) {
        const offset = i * imageSize[0] * imageSize[1] * imageSize[2];
        const isPositive = Math.random() < 0.5;
        
        // Generate base pattern
        for (let j = 0; j < imageSize[0] * imageSize[1]; j++) {
          images[offset + j] = Math.random() * 0.1;
        }

        // Add simulated patterns
        for (let x = 90; x < 134; x++) {
          for (let y = 90; y < 134; y++) {
            const idx = offset + (x * imageSize[1] + y);
            images[idx] = isPositive ? Math.random() * 0.3 : 0.7 + Math.random() * 0.3;
          }
        }
        
        labels[i] = isPositive ? 1 : 0;
      }

      return [
        tf.tensor4d(images, [numSamples, ...imageSize]),
        tf.tensor2d(labels, [numSamples, 1])
      ];
    } catch (error) {
      console.error('Error generating synthetic data:', error);
      throw new Error('Failed to generate training data');
    }
  });
}

// Train model with synthetic data
export async function trainModel(model: tf.LayersModel): Promise<tf.History> {
  try {
    const numSamples = 50; // Reduced sample size for faster training
    const [xDataset, ys] = generateSyntheticData(numSamples);
    
    const history = await model.fit(xDataset, ys, {
      epochs: 10, // Reduced epochs
      batchSize: 8,
      validationSplit: 0.2,
      shuffle: true,
      callbacks: {
        onEpochEnd: (epoch, logs) => {
          console.log(`Epoch ${epoch + 1}: loss = ${logs?.loss.toFixed(4)}, accuracy = ${logs?.acc.toFixed(4)}`);
        },
      },
    });
    
    // Cleanup
    tf.dispose([xDataset, ys]);
    
    return history;
  } catch (error) {
    console.error('Error training model:', error);
    throw new Error('Failed to train model');
  }
}

// Make prediction with error handling
export async function predict(model: tf.LayersModel, image: HTMLImageElement): Promise<number> {
  let tensor: tf.Tensor | null = null;
  let prediction: tf.Tensor | null = null;
  
  try {
    tensor = await preprocessImage(image);
    prediction = model.predict(tensor) as tf.Tensor;
    const probability = await prediction.data();
    return probability[0];
  } catch (error) {
    console.error('Error making prediction:', error);
    throw new Error('Failed to analyze image');
  } finally {
    // Cleanup tensors
    if (tensor) tensor.dispose();
    if (prediction) prediction.dispose();
  }
}