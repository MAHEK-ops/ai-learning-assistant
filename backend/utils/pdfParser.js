import fs from 'fs/promises';
import { PDFParse } from 'pdf-parse';

/**
 * Extract text from file
 * @param {string} filePath - Path to PDF file
 * @return {Promise<{text: string, numPages: number}>}
 */

export const extractTextFromPDF = async (filePath) => {
    try {
        const dataBuffer = await fs.readFile(filePath);
        // pdf-parse expects a Uint8Array, not a buffer
        const parser = new PDFParse(new Uint8Array(dataBuffer));
        const data = await parser.getText();

        return {
            text: data.text,
            numPages: data.numPages,
            info: data.info,
        };
    }catch (err) {
        console.error("PDF parsing error:", err);
        throw new Error("Failed to extract text from PDF");
    }
};

